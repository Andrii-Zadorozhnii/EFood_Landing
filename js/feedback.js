let feedback = [
    {
        id: '1',
        name: 'Cortney',
        image: 'https://i.pinimg.com/564x/4a/ca/a5/4acaa5f3f9dcd91c2f64fc970ef38204.jpg',
        text: "I've been using Efood for my food deliveries, and I'm consistently impressed with their efficient and timely service. No matter the weather or time of day, my orders arrive fresh and on time. It's a relief to know I can rely on Efood for a hassle-free delivery experience."
    },
    {
        id: '2',
        name: 'Robert',
        image: 'https://i.pinimg.com/564x/c3/83/ed/c383edb4a0beabfba61977eddf777059.jpg',
        text: "Efood has revolutionized my dining experience with its vast array of restaurant choices. From local gems to popular chains, I can always find something that suits my cravings. The easy-to-navigate app makes ordering a breeze, and the food arrives exactly as expected."
    },
    {
        id: '3',
        name: 'Johny',
        image: 'https://i.pinimg.com/564x/f2/67/ff/f267ff7ff5bf919f7a7360dec8ed11b9.jpg',
        text: "What sets Efood apart is their commitment to customer satisfaction. I had an issue with an order, and their customer support team was quick to respond and resolve the problem to my satisfaction. Their dedication to ensuring a positive experience speaks volumes about their service quality."
    },
]
let counter = 0;

const sectionFeedback = document.querySelector('.section-feedback');

const feedbackBlock = document.createElement('div');
feedbackBlock.classList.add('feedback-block');

const feedbackButtons = document.createElement('div');
feedbackButtons.classList.add('feedback-buttons');

const feedbackImageDiv = document.createElement('div');
feedbackImageDiv.classList.add('feedback-image-div');

const feedbackImage = document.createElement('img');
feedbackImage.classList.add('feedback-image');

const feedbackContent = document.createElement('div');
feedbackContent.classList.add('feedback-content');

const feedbackNameAndButtons = document.createElement('div');
feedbackNameAndButtons.classList.add('feedback-name-and-buttons');

const feedbackName = document.createElement('p');
feedbackName.classList.add('feedback-name');

const incrButton = document.createElement('button');
incrButton.textContent = ">";
incrButton.classList.add('feedback-buttons__button');
incrButton.addEventListener('click', () => {
    counter = (counter + 1) % feedback.length;
    updateFeedback();
});

const reduceButton = document.createElement('button');
reduceButton.textContent = "<";
reduceButton.classList.add('feedback-buttons__button');

reduceButton.addEventListener('click', () => {
    counter = (counter - 1 + feedback.length) % feedback.length;
    updateFeedback();
});

const feedbackText = document.createElement('p');
feedbackText.classList.add('feedback-text');

feedbackImageDiv.appendChild(feedbackImage);

feedbackNameAndButtons.appendChild(feedbackName);
feedbackNameAndButtons.appendChild(feedbackButtons);
feedbackButtons.appendChild(reduceButton);
feedbackButtons.appendChild(incrButton);


feedbackContent.appendChild(feedbackText);
feedbackContent.appendChild(feedbackNameAndButtons);

feedbackBlock.appendChild(feedbackImageDiv);
feedbackBlock.appendChild(feedbackContent);

sectionFeedback.appendChild(feedbackBlock);

function updateFeedback() {
    const currentFeedback = feedback[counter];
    feedbackImage.src = currentFeedback.image;
    feedbackImage.alt = currentFeedback.name;
    feedbackName.textContent = currentFeedback.name;
    feedbackText.textContent = currentFeedback.text;
}

function goToNextFeedback() {
    counter = (counter + 1) % feedback.length;
    updateFeedback();
}

updateFeedback(); // Initial update

// Automatic transition every 10 seconds
setInterval(goToNextFeedback, 13000);