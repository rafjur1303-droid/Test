// FUNKCJA DLA GŁÓWNYCH ZAKŁADEK (BOCZNYCH)
function changeMainTab(tabName) {
    // 1. Ukrywamy wszystkie poziome paski podmenu
    document.getElementById('sub-menu-stats').style.display = 'none';
    document.getElementById('sub-menu-research').style.display = 'none';
    document.getElementById('sub-menu-settings').style.display = 'none';

    // 2. Ukrywamy wszystkie główne panele gry
    document.getElementById('panel-stats').style.display = 'none';
    document.getElementById('panel-research').style.display = 'none';
    document.getElementById('panel-settings').style.display = 'none';

    // 3. Pokazujemy ten, który wybraliśmy
    document.getElementById('sub-menu-' + tabName).style.display = 'flex';
    document.getElementById('panel-' + tabName).style.display = 'block';

    // 4. Resetujemy podświetlenie przycisków bocznych
    let buttons = document.getElementsByClassName('side-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-main');
    }
    event.target.classList.add('active-main');

    // 5. Automatycznie otwieramy PIERWSZĄ podkategorię z danego menu przy zmianie głównego
    let defaultSub = {
        'stats': 'stats',
        'research': 'researchers',
        'settings': 'settings'
    };

    // Wywołujemy przełączenie podkategorii, żeby pasowało do otwartego menu
    changeSubTab(tabName, defaultSub[tabName]);
}

// FUNKCJA DLA PODKATEGORII (GÓRNYCH PASKÓW)
function changeSubTab(mainTabName, subTabName) {
    // 1. Szukamy i ukrywamy wszystkie pod-panele wewnątrz aktualnego głównego panelu
    let currentPanel = document.getElementById('panel-' + mainTabName);
    let subPanels = currentPanel.getElementsByClassName('sub-game-panel');
    for (let i = 0; i < subPanels.length; i++) {
        subPanels[i].style.display = 'none';
    }

    // 2. Pokazujemy dokładnie ten jeden wybrany pod-panel
    document.getElementById('sub-panel-' + mainTabName + '-' + subTabName).style.display = 'block';

    // 3. Resetujemy podświetlenie górnych przycisków w tym konkretnym menu
    let menuBar = document.getElementById('sub-menu-' + mainTabName);
    let subButtons = menuBar.getElementsByClassName('sub-btn');
    for (let i = 0; i < subButtons.length; i++) {
        subButtons[i].classList.remove('active-sub');
    }

    // Szukamy przycisku, który wywołał zdarzenie i dodajemy mu klasę aktywną (jeśli kliknięto bezpośrednio góry)
    if(event && event.target && event.target.classList.contains('sub-btn')) {
        event.target.classList.add('active-sub');
    } else {
        // Jeśli zmieniono z menu bocznego, podświetlamy pierwszy przycisk jako domyślny
        subButtons[0].classList.add('active-sub');
    }

    // 4. Aktualizujemy duży napis informacyjny na ekranie
    let titleElement = document.getElementById('current-menu-title');
    titleElement.innerText = mainTabName.toUpperCase() + ": " + subTabName.toUpperCase().replace('-', ' ');
}