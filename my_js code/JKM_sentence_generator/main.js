const button = document.querySelector('button');
const div = document.querySelector('div');
const elements = [
['Ja chcę powiedzieć jedną rzecz', 'Trzeba powiedzieć jasno', 'Jak powiedział wybitny krakowianin Stanisław Lem', 'Prosze mnie dobrze zrozumieć', 'Ja chciałem państwu przypomnieć że', 'Niech państwo nie maja złudzeń', 'Powiedzmy to wyraźnie'],
['Przedstawiciele czerwonej hołoty', 'ci wszyscy (tfu!) geje', 'funkcjonariusze reżimowej telewizji', 'tak zwani ekolodzy', 'ci wszyscy (tfu!) demokraci', 'agenci bezpieki', 'feminazistki'],
['zupełnie bezkarnie', 'całkowicie bezczelnie', 'o poglądach na lewo od komunizmu', 'celowo i świadomie', 'z premedytacją', 'od czasów Okrągłego Stołu', 'w ramach postępu'],
['nawołują do podniesienia podatków', 'próbują wyrzucic kierowców z miast', 'próbują skłócic Polskę z Rosją', 'głoszą brednię o globalnym ociepleniu', 'zakazuja posiadania broni', 'nie wpuszczają prawicy do władzy', 'uczą dzieci homoseksualizmu'],
['bo dzięki temu mogą kraść', 'bo dostają za to pieniądze', 'bo tak się uczy w państwowej szkole', 'bo bez tego (tfu!) demokracja nie może istnieć' , 'bo głupich jest więcej niż mądrych', 'bo chcą tworzyć raj na ziemi', 'bo chca niszczyć cywilizację białego człowieka'],
['przez kolejne kadencje', 'o czym się nie mówi', 'i właśnie dlatego Europa umiera', 'ale przyjda muzułmanie i zrobią porządek', 'tak samo zresztą jak za Hitlera', 'proszę zobaczyć co się dzieje na Zachodzie', 'jeśli mi państwo nie wierza', 'co lat temu sto nie przyszłoby nawet do głowy']];

const getRandomElement = () => {
    div.textContent = '';
    for (let i = 0; i < elements.length; i++) {
        const randomNumber = Math.floor(Math.random() * elements[i].length);
        div.textContent += elements[i][randomNumber] + ' ';
    } 
};

button.addEventListener('click', getRandomElement);
