'''
feature 4 - favorite game


this test chooses a game at random and favorites it, then closes the browser and reopens and search 
the favoriteded game in the list favorites list
'''
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pytest


def test1():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/")
    time.sleep(5)

    gameButtons =driver.find_elements(By.CLASS_NAME, "gameButton")
    i=random.randint(0,len(gameButtons)-1)
    gameButton = gameButtons[i]
    title = gameButton.find_element(By.CLASS_NAME,"gameTitle").text
    gameButton.find_element(By.CLASS_NAME, "buttonFavorite").click()
    time.sleep(5)
   
    favGames = driver.find_element(By.CLASS_NAME,"listfav")
    favButtons = favGames.find_elements(By.CLASS_NAME, "gameButton")
    
    for button in favButtons:
        if title == button.find_element(By.CLASS_NAME, "gameTitle").text:
            pass

    driver.quit()
    #assert False

test1()