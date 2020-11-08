class PageFinder {
    //Pass the parent element that will contain the button here
    constructor(buttonContainerClass, buttonText, searchPrompt) {
        //Assign the elements
        this.buttonParent = document.querySelector('.'+buttonContainerClass)
        this.searchButton = document.createElement('button');
        this.controlBar = document.createElement('div');
        this.nextBtn = document.createElement('button');
        this.prevBtn = document.createElement('button');
        this.cancelBtn = document.createElement('button');
        this.newSearchBtn = document.createElement('button');
        this.searchPrompt = searchPrompt;

        //Configure the elements
        this.searchButton.innerText = buttonText;
        this.searchButton.classList.add('finder__search')
        this.controlBar.classList.add('control-bar');
        this.controlBar.classList.add('hide')
        this.nextBtn.innerText = "Next Result";
        this.prevBtn.innerText = "Previous Result";
        this.cancelBtn.innerText = "Cancel";
        this.newSearchBtn.innerText = "New Search"
        this.searchButton.addEventListener('click', this.findOnPage.bind(this));
        this.nextBtn.addEventListener('click', this.findNext.bind(this));
        this.prevBtn.addEventListener('click', this.findPrevious.bind(this));
        this.cancelBtn.addEventListener('click', this.cancel.bind(this));
        this.newSearchBtn.addEventListener('click', this.newSearch.bind(this));

        //Attach the elements
        this.buttonParent.appendChild(this.searchButton);
        this.controlBar.appendChild(this.nextBtn);
        this.controlBar.appendChild(this.prevBtn);
        this.controlBar.appendChild(this.newSearchBtn);
        this.controlBar.appendChild(this.cancelBtn);
        document.body.appendChild(this.controlBar);
    }

    findOnPage() {
        this.searchTerm = prompt(this.searchPrompt);
        if (!this.searchTerm) return;
        if (!window.find(this.searchTerm, false, false, false, false)) {
            alert("No results found.  Please try your search again");
            this.findOnPage();
        }
        else {
            window.find(this.searchTerm, false, false, false, false);
            this.controlBar.classList.remove('hide');
        }
    }

    findNext() {
        window.find(this.searchTerm, false, false, true, false);
    }

    findPrevious() {
        window.find(this.searchTerm, false, true, true, false);
    }

    cancel() {
        window.getSelection().removeAllRanges()
        this.controlBar.classList.add('hide');
    }

    newSearch() {
        this.controlBar.classList.add('hide');
        this.findOnPage();
    }
    
    //Optional features to go along with this module
    static addTopButton(scrollPoint=300) {
        const topBtn = document.createElement('button');
        topBtn.innerHTML = "&#x2912;&nbsp;&nbsp;Back to Top";
        topBtn.classList.add('finder__top');
        topBtn.classList.add('hide');
        document.body.appendChild(topBtn);
        topBtn.addEventListener('click', function() {
            window.scrollTo(0,0);
        });
        window.addEventListener('scroll', function() {
            if(window.scrollY > scrollPoint) topBtn.classList.remove('hide');
            else topBtn.classList.add('hide');
        })
    }
}