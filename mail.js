// Waiting for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the menu button, menu close button, and the navigation element
    const menuButton = document.getElementById('menu-button');
    const menuClose = document.getElementById('menu-close');
    const navigation = document.getElementById('navigation');
  
     // click event listener added to the menu button to display the navigation
    menuButton.addEventListener('click', () => {
      navigation.style.display = 'block';
    });
    
    // click event listener added to the menu close button to hide the navigation
    menuClose.addEventListener('click', () => {
      navigation.style.display = 'none';
    });
  });
