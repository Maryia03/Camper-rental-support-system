import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import LogIn from '../LogIn';
import { AuthContext } from '../../../Context/AuthContext';
import './Camper1.css';
import kamper1Image from './Image/Camper1/dom1.jpeg';
import kamper2Image from './Image/Camper1/dom2.jpeg';
import kamper3Image from './Image/Camper1/dom4.jpeg';
import kamper4Image from './Image/Camper1/image5.jpeg';
import camper12Image from './Image/Camper1/camper1-wn.webp';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//Import ikon
import lozkoIcon from './Image/Dane techniczne/lozko2.svg';
import ludzikIcon from './Image/Dane techniczne/ludzik2.svg';
import snowIcon from './Image/Dane techniczne/snow.svg';
import truckIcon from './Image/Dane techniczne/truck.svg';
import waterIcon from './Image/Dane techniczne/water.svg';
import wysokoscIcon from './Image/Dane techniczne/wysokosc.svg';

const Camper1 = () => {
    const { currentUser, addReservation } = useContext(AuthContext);
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState(1);
    const [reservationStatus, setReservationStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false); // Stan do pokazania modala logowania

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString();
    };

    //Funkcja rezerwacji
    const handleReserve = () => {
        if (!currentUser) {
            setShowLoginModal(true);
            return;
        }
        if (!startDate || !endDate || !location || guests < 1) {
            return setErrorMessage('Proszę wypełnić wszystkie pola.');
        }
        if (new Date(startDate) < new Date() || new Date(endDate) < new Date() || new Date(startDate) >= new Date(endDate)) {
            return setErrorMessage('Kamper jest niedostępny w wybranym terminie.');
        }

        //Dodanie rezerwacji
        const newReservation = {
            id: Date.now(),
            userId: currentUser.id,
            image: kamper4Image,
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
            location,
            guests,
            camper: 'Kamper A'
        };

        addReservation(newReservation);
        setReservationStatus('Zarezerwowano!');
        setTimeout(() => setReservationStatus(''), 3000);
        navigate('/reservations');
    };

    return (
        <div className="camper1-details">
            <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Logowanie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LogIn handleClose={() => setShowLoginModal(false)} />
                </Modal.Body>
            </Modal>

            <h2>Kamper A</h2>
            
            <img src={kamper4Image} alt="" className="camper1-detail-image" />

            <div className="camper1-gallery">
                <img src={kamper2Image} alt="Kamper A - 1" />
                <img src={kamper3Image} alt="Kamper A - 2" />
                <img src={kamper1Image} alt="Kamper A - 3" />
            </div>
            <hr className="divider" />
            <div className="camper1-text-section">
                <div className="camper1-text-image">
                    <img src={kamper1Image} alt="Kamper 1" className="camper1-image" />
                    <div className="camper1-text">
                        <h3>Podróżuj kiedy tylko chcesz</h3>
                        <p>
                            Dzięki odpowiednio wyposażonym pojazdom kempingowym można spełniać podróżnicze marzenia.
                            Perfekcyjnie dopracowany kamper z alkową znakomicie spisuje się w roli auta rodzinnego, którym
                            można przemierzać setki kilometrów. Pora roku nie gra roli – wystarczy spakować potrzebne rzeczy
                            i wyruszyć na poszukiwanie przygód.
                        </p>
                        <p>
                            Kamper z łóżkiem nad kabiną kierowcy doskonale nadaje się na weekendowe wyjazdy, jak również
                            na dłuższe trasy, które uwzględniają więcej punktów na mapie w ramach turystycznych atrakcji.
                            W pojazdach oferowanych przez włoską markę każdy fragment przestrzeni jest idealnie wykorzystany.
                        </p>
                    </div>
                </div>
                <div className="camper1-text-image reverse">
                    <div className="camper1-text">
                        <h3>Stylowe i praktyczne wyposażenie</h3>
                        <ul className="camper1-list">
                            <li><span className="arrow">→</span> ABS, ABD, ESP, ESC, ASR</li>
                            <li><span className="arrow">→</span> Oryginalny wygląd pojazdu, wysokiej klasy materiały wykończeniowe</li>
                            <li><span className="arrow">→</span> Elektrycznie wysuwany stopień</li>
                            <li><span className="arrow">→</span> Okna z podwójnymi szybami, roletami i moskitierami</li>
                            <li><span className="arrow">→</span> Wysokość wewnątrz ok. 210 cm</li>
                            <li><span className="arrow">→</span> Ogrzewanie gazowe Truma Combi 6</li>
                            <li><span className="arrow">→</span> Oświetlenie LED, w tym pod szafkami</li>
                            <li><span className="arrow">→</span> Bateria 95 Ah, gniazda zasilające 230V i 12V, podwójne gniazdo USB</li>
                            <li><span className="arrow">→</span> Zbiornik na wodę 122 l, zbiornik na ścieki 90 l</li>
                            <li><span className="arrow">→</span> Wygodne schowki i szafa ubraniowa</li>
                            <li><span className="arrow">→</span> Nowoczesne sofy tapicerowane, praktyczny stół</li>
                            <li><span className="arrow">→</span> Modna łazienka z prysznicem, pojemnymi szafkami i toaletą kasetową</li>
                            <li><span className="arrow">→</span> Część sypialna z wysokiej jakości materacami</li>
                            <li><span className="arrow">→</span> Aneks kuchenny z lodówką i 2-palnikową kuchenką</li>
                        </ul>
                    </div>
                    <img src={kamper2Image} alt="Kamper 2" className="camper1-image" />
                </div>
            </div>
            <hr className="divider" />

            {/*Sekcja cech kampera z ikonami*/}
            <div className="camper1-features-container">
                <div className="camper1-features">
                    <div className="feature-item">
                    <img src={lozkoIcon} alt="Łóżko" className="feature-icon" />
                        <p>Wygodne łóżko</p>
                    </div>
                    <div className="feature-item">
                    <img src={ludzikIcon} alt="Liczba gości" className="feature-icon" />
                        <p>Dla 4 osób</p>
                    </div>
                    <div className="feature-item">
                    <img src={snowIcon} alt="Klimatyzacja" className="feature-icon" />
                        <p>Wbudowana klimatyzacja</p>
                    </div>
                    <div className="feature-item">
                    <img src={truckIcon} alt="Silnik" className="feature-icon" />
                        <p>Silnik 2.0 TDI</p>
                    </div>
                    <div className="feature-item">
                    <img src={waterIcon} alt="Woda" className="feature-icon" />
                        <p>Woda 122l</p>
                    </div>
                    <div className="feature-item">
                    <img src={wysokoscIcon} alt="Wysokość" className="feature-icon" />
                        <p>Wysokość 3,5m</p>
                    </div>
                </div>
                <div className="camper12-image-container">
                    <img src={camper12Image}alt="Kamper" className="camper12-image" />
                </div>
            </div>
            <hr className="divider" />
            {/*Sekcja rezerwacji*/}
            <div className="camper1-reservation-container">
                <div className="camper1-reservation-form-container">
                    <h3>Rezerwacja Kampera</h3>
                    <div className="form-control">
                        <label htmlFor="location">Lokalizacja:</label>
                        <input
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Wpisz lokalizację"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="guests">Liczba gości:</label>
                        <input
                            id="guests"
                            type="number"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            min="1"
                        />
                    </div>

                    {errorMessage && <p className="camper1-error-message">{errorMessage}</p>}
                </div>

                <div className="camper1-calendar-container">
                    <Calendar
                        onChange={(date) => {
                            setStartDate(date[0]);
                            setEndDate(date[1]);
                        }}
                        selectRange={true}
                    />
                </div>
            </div>

            <button onClick={handleReserve} className="camper1-reserve-button">Rezerwuj</button>
            {reservationStatus && <p className="camper1-reservation-status">{reservationStatus}</p>}
        </div>
    );
};

export default Camper1;
