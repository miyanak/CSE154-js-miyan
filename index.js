/**
 * Name: Miya Nakata
 * Date: April 20, 2023
 * Section: CSE 154 AA, TA: Elias Martin
 *
 * This is the index.js page for the beginnings of my portfolio. It includes functions to change
 * specific images on the webpage, have a dark and light mode, and reveal a hidden answer.
 */
"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * This function sets up the initial document event handlers.
   */
  function init() {
    let button = id("fun-btn");
    button.addEventListener("click", changeImg);
    let themeIcon = id("theme-icon");
    themeIcon.addEventListener("click", changeTheme);
    let lieBtn = id("lie-btn");
    lieBtn.addEventListener("click", revealLie);
  }

  /**
   * This function changes the profile picture to a gif when the user clicks the "click me" button.
   */
  function changeImg() {
    let image = id('profile-pic');
    image.src = "rick.gif";
    image.alt = "hehehe";
    image.classList.add("fun-border");
  }

  /**
   * This function changes the theme of the webpage between light or dark mode after a user
   * clicks on the sun or moon icon in the top right corner of the navigation bar.
   */
  function changeTheme() {
    document.body.classList.toggle("dark-mode");
    let themeIcon = id("theme-icon");
    if (document.body.classList.contains("dark-mode")) {
      themeIcon.src = "sun.png";
      themeIcon.alt = "light mode icon";
    } else {
      themeIcon.src = "moon.jpg";
      themeIcon.alt = "dark mode icon";
    }
  }

  /**
   * This function reveals which of the 3 statements were a lie by replacing the lie with
   * its truth.
   */
  function revealLie() {
    let truthList = id("truth-list");
    let lie = truthList.children[0];
    let newTruth = document.createElement("li");
    newTruth.textContent = "I've never been to Europe!";
    newTruth.classList.add("lie-reveal");
    truthList.replaceChild(newTruth, lie);
  }

  /**
   * Finds the element with the specified id attribute.
   * @param {string} id - element id
   * @returns {HTMLElement} the DOM node with the id name.
   */
  function id(id) {
    return document.getElementById(id);
  }
})();