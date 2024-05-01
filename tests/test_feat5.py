'''
feature 5 - game detail:

the test chooses a game at random from the game list and after a event click
must assert that it goes to a new page detail and all required fields are valid.

'''
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time
import pytest

def compare(x,y):
    if len(x) == len(y) and x <= y:
        return True
    return False

def test1():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/")
    time.sleep(5)
    
    select = Select(driver.find_element(By.TAG_NAME,"select"))
    select.select_by_visible_text('date')
    time.sleep(3)
    gameButtons = driver.find_elements(By.CLASS_NAME, "gameButton")
    curtitle = gameButtons[1].find_element(By.CLASS_NAME,"date").get_attribute("title")
    for button in gameButtons[1:]:
        title = button.find_element(By.CLASS_NAME,"date").get_attribute("title")
        print("comparing " + curtitle+" to " + title)
        if curtitle < title or curtitle == title:
            curtitle = title
        else:
            assert False
    driver.quit()
    pass

test1()