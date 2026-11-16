import sys
from backend.app.main import app, root
from backend.app.api.v1.health import health_check, ping
from backend.app.core.config import settings

def resolve(coroutine):
    """Executes a pure coroutine directly without spinning up OS loopback sockets."""
    try:
        coroutine.send(None)
    except StopIteration as exc:
        return exc.value
    raise RuntimeError("Coroutine did not complete synchronously")

def test_phase1_backend():
    print("\n" + "=" * 60)
    print("  LEARNSPHERE AI — PHASE 1 BACKEND VERIFICATION SUITE")
    print("=" * 60)

    # 1. App Configuration
    print("\n[TEST 1] Verifying System Configuration...")
    assert app.title == "LearnSphere AI", f"Expected title 'LearnSphere AI', got {app.title}"
    assert app.version == "1.0.0", f"Expected version '1.0.0', got {app.version}"
    assert settings.API_V1_STR == "/api/v1"
    assert "http://localhost:5173" in settings.BACKEND_CORS_ORIGINS
    print("  ✓ Configuration, versioning and CORS origins verified.")

    # 2. Root Endpoint
    print("\n[TEST 2] Testing Root Metadata Endpoint...")
    root_data = resolve(root())
    assert "LearnSphere AI" in root_data["message"]
    assert root_data["tagline"] == "Learn Anything. Build Everything. Grow Everywhere."
    assert root_data["docs_url"] == "/api/v1/docs"
    assert root_data["health_check"] == "/api/v1/health"
    print(f"  ✓ Root responded successfully: {root_data['tagline']}")

    # 3. Health Endpoint
    print("\n[TEST 3] Testing API v1 Health & Diagnostics...")
    health_data = resolve(health_check())
    assert health_data["status"] == "online"
    assert health_data["service"] == "LearnSphere AI"
    assert health_data["version"] == "1.0.0"
    assert "features" in health_data
    print(f"  ✓ Health status: {health_data['status']} (Version {health_data['version']})")

    # 4. Ping Endpoint
    print("\n[TEST 4] Testing Ping...")
    ping_data = resolve(ping())
    assert ping_data == {"ping": "pong"}
    print("  ✓ Ping returned pong.")

    # 5. OpenAPI Schema Generation
    print("\n[TEST 5] Validating OpenAPI Specification...")
    schema = app.openapi()
    assert schema["info"]["title"] == "LearnSphere AI"
    expected_paths = ["/", "/api/v1/health", "/api/v1/ping"]
    for path in expected_paths:
        assert path in schema["paths"], f"Missing path {path} in OpenAPI spec"
        print(f"  ✓ Route registered in OpenAPI: {path}")

    print("\n" + "=" * 60)
    print("  ✓ ALL PHASE 1 BACKEND TESTS COMPLETED SUCCESSFULLY!")
    print("=" * 60 + "\n")
    return True

if __name__ == "__main__":
    success = test_phase1_backend()
    if not success:
        sys.exit(1)
