import asyncio
import sys
from backend.app.main import app, root
from backend.app.api.v1.health import health_check, ping
from backend.app.core.config import settings

def run_all_tests():
    print("=== LearnSphere AI Backend Unit Tests ===")
    
    # 1. Configuration tests
    print("[1/4] Checking app configuration & metadata...")
    assert app.title == "LearnSphere AI"
    assert app.version == "1.0.0"
    assert settings.API_V1_STR == "/api/v1"
    print("      ✓ App metadata valid")
    
    # 2. OpenAPI schema test
    print("[2/4] Generating OpenAPI schema...")
    schema = app.openapi()
    assert schema["info"]["title"] == "LearnSphere AI"
    assert "/api/v1/health" in schema["paths"]
    assert "/api/v1/ping" in schema["paths"]
    print(f"      ✓ Schema generated with {len(schema['paths'])} active paths")
    
    # 3. Direct Route invocations
    print("[3/4] Testing API root & health endpoints...")
    root_res = asyncio.run(root())
    assert root_res["tagline"] == "Learn Anything. Build Everything. Grow Everywhere."
    print("      ✓ Root endpoint response verified")
    
    health_res = asyncio.run(health_check())
    assert health_res["status"] == "online"
    assert health_res["service"] == "LearnSphere AI"
    assert "features" in health_res
    print("      ✓ Health status check verified: online")
    
    ping_res = asyncio.run(ping())
    assert ping_res == {"ping": "pong"}
    print("      ✓ Ping check verified")
    
    print("\n[4/4] ALL BACKEND TESTS PASSED (100% SUCCESS)!")
    return True

if __name__ == "__main__":
    success = run_all_tests()
    if not success:
        sys.exit(1)
