from pydantic import BaseModel,EmailStr

class RegisterResponse(BaseModel):
    message: str
    email: EmailStr

class LoginResponse(BaseModel):
    message: str
    token: str