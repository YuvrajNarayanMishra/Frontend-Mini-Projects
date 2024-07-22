// scripts.js

function addCategory() {
    const categoryInput = document.getElementById('new-category');
    const categoryName = categoryInput.value.trim();

    if (categoryName === '') {
        alert('Category name cannot be empty');
        return;
    }

    // Add to categories list
    const categoriesList = document.getElementById('categories-list');
    const newCategoryItem = document.createElement('li');
    newCategoryItem.textContent = categoryName;
    categoriesList.appendChild(newCategoryItem);

    // Add to select category dropdown
    const selectCategory = document.getElementById('select-category');
    const newOption = document.createElement('option');
    newOption.value = categoryName;
    newOption.textContent = categoryName;
    selectCategory.appendChild(newOption);
    
    // Add Button
    const selectButton = document.getElementById('navButton');
    const newButtons = document.createElement('button');
    newButtons.innerText = categoryName;
    selectButton.appendChild(newButtons);

    // Add to categories menu
    const categoriesMenu = document.getElementById('categories-menu');
    const newMenuItem = document.createElement('li');
    newMenuItem.textContent = categoryName;
    categoriesMenu.appendChild(newMenuItem);

    // Add to categories checklist
    const categoriesChecklist = document.querySelector('.categories-checklist form');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = `check-${categoryName}`;
    newCheckbox.name = 'category';
    newCheckbox.value = categoryName;
    const newLabel = document.createElement('label');
    newLabel.htmlFor = `check-${categoryName}`;
    newLabel.textContent = categoryName;
    categoriesChecklist.appendChild(newCheckbox);
    categoriesChecklist.appendChild(newLabel);
    categoriesChecklist.appendChild(document.createElement('br'));

    // Clear input
    categoryInput.value = '';
}

function removeCategory() {
    const selectCategory = document.getElementById('select-category');
    const categoryName = selectCategory.value;

    if (categoryName === 'All') {
        alert('Cannot remove "All" category');
        return;
    }

    // Remove from categories list
    const categoriesList = document.getElementById('categories-list');
    const listItem = Array.from(categoriesList.getElementsByTagName('li'))
        .find(item => item.textContent === categoryName);
    if (listItem) {
        categoriesList.removeChild(listItem);
    }
    

    // Remove from select category dropdown
    const option = Array.from(selectCategory.getElementsByTagName('option'))
        .find(opt => opt.value === categoryName);
    if (option) {
        selectCategory.removeChild(option);
    }

    // Remove from categories menu
    const categoriesMenu = document.getElementById('categories-menu');
    const menuItem = Array.from(categoriesMenu.getElementsByTagName('li'))
        .find(item => item.textContent === categoryName);
    if (menuItem) {
        categoriesMenu.removeChild(menuItem);
    }

    // Remove from categories checklist
    const categoriesChecklist = document.querySelector('.categories-checklist form');
    const checkbox = document.getElementById(`check-${categoryName}`);
    const label = categoriesChecklist.querySelector(`label[for="check-${categoryName}"]`);
    const br = label.nextElementSibling;
    if (checkbox && label && br) {
        categoriesChecklist.removeChild(checkbox);
        categoriesChecklist.removeChild(label);
        categoriesChecklist.removeChild(br);
    }
    
    // Remove Button
    const categoriesBtn = document.getElementById('navButton');
    const BtnItem = Array.from(categoriesBtn.getElementsByTagName('button'))
        .find(item => item.innerText === categoryName);
    if (BtnItem) {
        categoriesBtn.removeChild(BtnItem);
    }
}
