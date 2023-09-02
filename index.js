const layout = document.querySelector('.layout');

const markData = [
{color: 'blue', text: 'Жилой дом', position: {top: '282px', left: '580px'}},
{color: 'blue', text: 'Бизнес-центр', position: {top: '225px', left: '1373px'}},
{color: 'green', text: 'Павильон', position: {top: '404px', left: '1148px'}},
{color: 'green', text: 'Стадион', position: {top: '482px', left: '687px'}},
{color: 'blue', text: 'Служебное здание', position: {top: '475px', left: '1414px'}},
{color: 'blue', text: 'Администрация', position: {top: '629px', left: '1081px'}},
{color: 'green', text: 'Левый корпус', position: {top: '669px', left: '1306px'}},
{color: 'blue', text: 'Правый корпус', position: {top: '713px', right: '286px'}},
{color: 'blue', text: 'Променад', position: {top: '714px', left: '446px'}},
{color: 'green', text: 'Отель', position: {top: '790px', left: '1107px'}},
];

const renderMark = (data) => {
  const markTemplate = document.querySelector('#mark-template').content;
  const mark = markTemplate.querySelector('.mark').cloneNode(true);

  mark.classList.add(`mark_color_${data.color}`);

  mark.style.top = `calc(${data.position.top} + (100% - 1080px) / 2)`;
  mark.style.left = `calc(${data.position.left} + (100% - 1920px) / 2)`;
  mark.style.right = `calc(${data.position.right} + (100% - 1850px) / 2)`;

  mark.querySelector('.mark__text').textContent = data.text;

  return mark;
};

markData.map(mark => {
  const newMark = renderMark(mark);

  layout.append(newMark);
});

layout.addEventListener('click', (e) => {
  if (e.target.classList.contains('layout')) {
    const activeMarks = document.querySelectorAll('.active');

    activeMarks.forEach(mark => mark.classList.remove('active'));
  } else {
    e.target.closest('.mark').classList.toggle('active');
  }
});
