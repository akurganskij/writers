import Writer from './Writer';
import './Writers.css';
import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';

function Writers(){
    return (
        <div className='Writers'>
            <Writer name="Григорій Квітка-Основ’яненко"
                    link="https://uk.wikipedia.org/wiki/%D0%9A%D0%B2%D1%96%D1%82%D0%BA%D0%B0-%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%27%D1%8F%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE_%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%96%D0%B9_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87"
                    img={photo1}
                    years="1778-1843"
                    works='«Сватання на Гончарівці», «Конотопській відьмі», «Марусі», «Солдатському портреті», «Серцевої Оксані», «От тобі і скарб», «Сватання на Гончарівці»'/>
            <Writer name="Гнат Хоткевич"
                    link='https://uk.wikipedia.org/wiki/%D0%A5%D0%BE%D1%82%D0%BA%D0%B5%D0%B2%D0%B8%D1%87_%D0%93%D0%BD%D0%B0%D1%82_%D0%9C%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87'
                    img={photo2}
                    years='1877-1938'
                    works='«Грузинка», «Блудний син», «Різдвяний вечір», «Життєві аналогії», збірник «Гірські акварелі», «Гуцульські картинки», «Авірон», «Берестечко»'/>
            <Writer name="Борис Чичибабін"
                    link='https://uk.wikipedia.org/wiki/%D0%A7%D0%B8%D1%87%D0%B8%D0%B1%D0%B0%D0%B1%D1%96%D0%BD_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87'
                    img={photo3}
                    years='1923-1994'
                    works='«Махорка», «Молодість», «Мороз і сонце», «Колокол», «Экскурсия в Лицей», «Когда я был счастливый», «Раннее и позднее»'/>
            <Writer name="Сергій Жадан"
                    link='https://uk.wikipedia.org/wiki/%D0%96%D0%B0%D0%B4%D0%B0%D0%BD_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87'
                    img={photo4}
                    years='1974'
                    works='«Генерал Юда» та «Цитатник». Потім були «Пепсі», «Історія культури початку століття», «Ефіопія»'/>
        </div>
    );
}

export default Writers;