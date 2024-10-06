const activity = document.querySelector('.activity-box');
const activityItems = document.querySelectorAll('.activity-list__item');

activity.addEventListener('click', (e) => {
 if (e.target.classList.contains('activity-list__item')) (e.target.classList.toggle('activity-list__item_checked'))
})
