import pytest
import asyncio
from backend.app.main import app, root
from backend.app.api.v1.health import health_check, ping
from backend.app.core.config import settings


@pytest.mark.anyio
async def test_root_endpoint_direct():
    result = await root()
    assert "LearnSphere AI" in result["message"]
    assert result["tagline"] == "Learn Anything. Build Everything. Grow Everywhere."
    assert result["docs_url"] == "/api/v1/docs"
    assert result["health_check"] == "/api/v1/health"


@pytest.mark.anyio
async def test_health_check_direct():
    result = await health_check()
    assert result["status"] == "online"
    assert result["service"] == "LearnSphere AI"
    assert result["version"] == "1.0.0"
    assert "features" in result
    assert "auth" in result["features"]
    assert "ai_tutor" in result["features"]


@pytest.mark.anyio
async def test_ping_direct():
    result = await ping()
    assert result == {"ping": "pong"}


def test_app_configuration():
    assert app.title == "LearnSphere AI"
    assert app.version == "1.0.0"
    assert settings.API_V1_STR == "/api/v1"
    
    # Verify OpenAPI schema can be generated correctly
    openapi_schema = app.openapi()
    assert openapi_schema["info"]["title"] == "LearnSphere AI"
    assert "/api/v1/health" in openapi_schema["paths"]
    assert "/api/v1/ping" in openapi_schema["paths"]
    assert "/" in openapi_schema["paths"]
