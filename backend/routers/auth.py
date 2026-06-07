from fastapi import APIRouter
from schemas.auth import RegisterResponse, LoginResponse 

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/register", response_model=RegisterResponse)
def register_mock():
    return {
        "message": "Registrierung erfolgreich",
        "email": "user@example.com"
    }

@router.post("/login", response_model=LoginResponse)
def login_mock():
    return {
        "message": "Login erfolgreich",
        "token": "mock-jwt-token-xyz123"
    }