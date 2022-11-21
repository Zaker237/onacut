from datetime import date, time
from typing import Literal, Union

from pydantic import BaseModel


class AlertBase(BaseModel):
    observations: str
    type: Literal["electricity", "water", "internet"]
    date: date
    begin_time: time
    region_id: int
    longitude: float
    lattitude: float
    city_id: int
    district_id: int


class AlertCreate(AlertBase):
    longitude: Union[float, None] = None
    lattitude: Union[float, None] = None
    end_time: Union[time, None] = None


class AlertUpdate(AlertCreate, AlertBase):
    id: int


class Alert(AlertBase, BaseModel):
    id: int
    end_time: Union[time, None] = None
    region: str
    city: str
    district: str

    class Config:
        orm_mode = True
