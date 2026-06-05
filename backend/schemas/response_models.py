from pydantic import BaseModel,EmailStr

class RegisterResponse(BaseModel):
    message: str
    EmailStr: str

class LoginResponse(BaseModel):
    message: str
    token: str