'''
feature 2 - filter games:

the test chooses at random 1 game for one required field (plataforma,  ano de lançamento, categoria, 
desenvolvedora) then filter the game list for each field and chooses 10 games at random. If a single filtered
game dont have the same selected field the  test fails. Otherwise the test passes

'''

from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pytest
import random

def test():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/")
    
    time.sleep(4)
    gameButtons = driver.find_elements(By.CLASS_NAME, "gameButton")
    time.sleep(4)
    
    gameButton = gameButtons[random.randint(0,len(gameButtons)-1)]
    platform = gameButton.find_element(By.CLASS_NAME, "gamePlatform").text
    
    print(platform)

    filterPanel = driver.find_element(By.CLASS_NAME, "filterPanel")
    inputs = filterPanel.find_elements(By.TAG_NAME, "input")
    filterButton = filterPanel.find_element(By.CLASS_NAME,"filterButton")

    myinput=None

    for input in inputs:
        if input.get_attribute("placeholder")=="platform...":
            myinput = input
    myinput.send_keys(platform)
    time.sleep(0.5)
    filterButton.click()
    time.sleep(5)
    gameButtons = driver.find_elements(By.CLASS_NAME, "gameButton")

    for button in gameButtons:
        assert button.find_element(By.CLASS_NAME,"gamePlatform").text == platform

    driver.quit()
    pass


test()
