'''
feature 2 - filter games:

the test chooses at random 1 game for each required field (plataforma,  ano de lançamento, categoria, 
desenvolvedora) then filter the game for each field and chooses 10 games at random. If a single filtered
game dont have the same selected field the  test fails. Otherwise the test passes

'''


import random
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pytest


def test1():
    for i in range(0,2):
        driver = webdriver.Chrome()
        driver.get("http://localhost:4200/")
        time.sleep(5)
        gameButtons = driver.find_elements(By.CLASS_NAME, "gameButton")
        print(len(gameButtons))
        assert len(gameButtons) > 10
    
        gameButton = gameButtons[random.randint(0,len(gameButtons)-1)]
        gameButton.click()
        time.sleep(3)
        print("current url " + driver.current_url)
        params = []
        params.append(driver.find_element(By.CLASS_NAME, "gameTitle").text)
        params.append(driver.find_element(By.CLASS_NAME, "gameDescription").text)
        params.append(driver.find_element(By.CLASS_NAME, "gamePublisher").text)
        params.append(driver.find_element(By.CLASS_NAME, "gameRealease").text)
        params.append(driver.find_element(By.CLASS_NAME, "gamePlatform").text)
        params.append(driver.find_element(By.CLASS_NAME, "gamesc").get_attribute("src"))
        
        for param in params:
            print(param)
            assert param != None
            assert len(param) > 1
        
        driver.back()
        time.sleep(5)
        driver.quit()

    pass

test1()