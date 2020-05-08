let preOrder = (elementIndex) => {
    let sectionElements = document.getElementsByClassName("section");
    let sectionElement = sectionElements[elementIndex];
    let btnElements = document.getElementsByClassName("section-info__order");
    let btnElement = btnElements[elementIndex];
    let btnTextElements = document.getElementsByClassName("section-info__order__btn__text");
    let btnTextElement = btnTextElements[elementIndex];
    btnTextElement.innerText = message.detail;
    btnElement.onclick = null;
    setTimeout(() => {
        sectionElement.onmouseleave = (() => mouseOut(elementIndex));
        sectionElement.onclick = (() => unOrder(elementIndex));
    }, 0)
};

let unOrder = (elementIndex) => {
    let sectionElements = document.getElementsByClassName("section");
    let sectionElement = sectionElements[elementIndex];
    let btnElements = document.getElementsByClassName("section-info__order");
    let btnElement = btnElements[elementIndex];
    let btnTextElements = document.getElementsByClassName("section-info__order__btn__text");
    let btnTextElement = btnTextElements[elementIndex];
    btnElement.onclick = null;
    sectionElement.onclick = null;
    sectionElement.classList.remove("gray-scale");
    btnTextElement.innerText = message.book;
    setTimeout(() => {
        btnElement.onclick = (() => preOrder(elementIndex));
    }, 0);
};

let mouseOut = (elementIndex) => {
    let sectionElements = document.getElementsByClassName("section");
    let sectionElement = sectionElements[elementIndex];
    sectionElement.classList.add("gray-scale");
    sectionElement.onmouseleave = null;
};

(function () {
    let sectionElements = document.getElementsByClassName("section");
    let sectionElement = sectionElements[1];
    let starImg = document.getElementsByClassName("duplex_star-img")[0];
    let starText = document.getElementsByClassName("duplex_star-text")[0];
    let textElements = document.getElementsByClassName("section-info__name");
    let descriptionElements = document.getElementsByClassName("section-info__description");

    sectionElement.onmouseover = () => {
        if (sectionElement.classList.length === 1) {
            starImg.style = "display: block";
            starText.style = "display: block";
        }
    };

    sectionElement.onmouseout = () => {
        starImg.style = "display: none";
        starText.style = "display: none";
    };

    let sectionLength = sectionElements.length;
    let defaultNameHeight = 0;
    let defaultDescriptionHeight = 0;
    let btnElements = document.getElementsByClassName("section-info__order");
    let btnTextElements = document.getElementsByClassName("section-info__order__btn__text");

    for (let i = 0; i < sectionLength; i++) {
        if (textElements[i].offsetHeight >= defaultNameHeight) {
            defaultNameHeight = textElements[i].offsetHeight;
        }
        if (descriptionElements[i].offsetHeight >= defaultDescriptionHeight) {
            defaultDescriptionHeight = descriptionElements[i].offsetHeight;
        }
        if (sectionElements[i].classList.length === 1) {
            if (btnTextElements[i].textContent) {
                btnTextElements[i].textContent = message.book;
            } else {
                btnTextElements[i].innerText = message.book;
            }
            btnElements[i].onclick = (() => preOrder(i));
        } else {
            if (btnTextElements[i].textContent) {
                btnTextElements[i].textContent = message.detail;
            } else {
                btnTextElements[i].innerText = message.detail;
            }
            sectionElements[i].onclick = (() => unOrder(i));
        }
    }
    for (let i = 0; i < sectionLength; i++) {
        textElements[i].style.height = defaultNameHeight - 50 + 'px';
        descriptionElements[i].style.height = defaultDescriptionHeight - 24 + 'px';
    }
}());
