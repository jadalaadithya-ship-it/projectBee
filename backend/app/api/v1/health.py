from fastapi import APIRouter
from backend.app.core.config import settings

router = APIRouter()


@router.get("/health", summary="Health Check")
async def health_check():
    """Returns the operational status of the LearnSphere AI backend API."""
    return {
        "status": "online",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT,
        "features": {
            "auth": bool(settings.SUPABASE_URL),
            "ai_tutor": bool(settings.GEMINI_API_KEY),
        }
    }


@router.get("/ping", summary="Ping")
async def ping():
    return {"ping": "pong"}
