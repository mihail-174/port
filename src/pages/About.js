import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Toolbar from "@material-ui/core/Toolbar";
import BackToTop from "../components/BackToTop";

import photo from "../about-photo.jpg";
import SimpleTabs from "../components/SimpleTabs";

// const useStyles = makeStyles((theme) => ({
// }));

function About() {
	// const classes = useStyles();
	const [phone, showPhone] = useState(false);
	const [email, showEmail] = useState(false);

	return (
		<div className="app-wrapper about-page">
			<Header/>
			<div className={"content"}>
				<h1 className={"page-title"}>Обо мне</h1>
				{/*<div className="row">*/}
					{/*<div className="col-sm-4">*/}

						<div className={"about-card"}>
							<div className={"about-card__inner"}>
								<img src={photo} className={"about-card__photo"} alt="" />
								<div className={"about-card__info"}>
									<div className={"about-card__fio"}>Приданников Михаил</div>
									<div className={"about-card__position"}>Frontend Developer</div>
									<div className={"about-card__field"}>
										<div className={"about-card__field-label"}>Телефон:</div>
										<div className={"about-card__field-value"}>
											{
												!phone
													?
													<span className={"about-card__show"} onClick={() => showPhone(true)}>показать номер</span>
													:
													<span className={""}>
														<a href="tel:+79518011794">+7 951 801 17 94</a>
														<a className={"about-card__whatsapp"} href="https://wa.me/+79518011794?text=Здравствуйте.%20Я%20был(а)%20заинтересован(а)%20вашим%20портфолио." target="_blank">
															<i className="fab fa-whatsapp"></i>
														</a>
													</span>
											}
										</div>
									</div>
									<div className={"about-card__field"}>
										<div className={"about-card__field-label"}>Email:</div>
										<div className={"about-card__field-value"}>
											{
												!email
													?
													<span className={"about-card__show"} onClick={() => showEmail(true)}>показать почту</span>
													:
													<a href="mailto:24mishka91@gmail.com">24mishka91@gmail.com</a>
											}
										</div>
									</div>
									<div className={"about-card__field"}>
										<div className={"about-card__field-label"}>Откуда:</div>
										<div className={"about-card__field-value"}>
											Челябинская область, г.Миасс
										</div>
									</div>

									<div className={"social"}>
										<div className={"social__item"}>
											<a className={"social__link"} href="https://vk.com/mihail47" target="_blank">
												<i className="fab fa-vk"></i>
											</a>
										</div>
										<div className={"social__item"}>
											<a className={"social__link"} href="https://github.com/mihail-174" target="_blank">
												<i className="fab fa-github"></i>
											</a>
										</div>
									</div>

								</div>

							</div>
						</div>
					{/*</div>*/}

					{/*<div className="col">*/}

						<div className={"skils"}>
							<h4>Professional skills</h4>
							<div className={"skils__item"}>
								<div className={"skils__label"}>
									<span>HTML</span>
									<span>95%</span>
								</div>
								<div className={"skils__bar"}>
									<div className={"skils__level"} style={{width: "95%"}}></div>
								</div>
							</div>
							<div className={"skils__item"}>
								<div className={"skils__label"}>
									<span>CSS</span>
									<span>90%</span>
								</div>
								<div className={"skils__bar"}>
									<div className={"skils__level"} style={{width: "90%"}}></div>
								</div>
							</div>
							<div className={"skils__item"}>
								<div className={"skils__label"}>
									<span>jQuery</span>
									<span>40%</span>
								</div>
								<div className={"skils__bar"}>
									<div className={"skils__level"} style={{width: "40%"}}></div>
								</div>
							</div>
							<div className={"skils__item"}>
								<div className={"skils__label"}>
									<span>JavaScript</span>
									<span>15%</span>
								</div>
								<div className={"skils__bar"}>
									<div className={"skils__level"} style={{width: "15%"}}></div>
								</div>
							</div>
							<p className={"skils__description"}>
								При верстке использую gulp (в связке с JADE, SCSS, JS), собственный конфиг сборки и компонентный подход.
								Именование классов по BEM методологии. Flexbox. Grid. Git.
								Drupal (7 и 8 версии, создание тем и подтем, PHP на уровне понимания кода для натяжки на cms).
								Имеется небольшой опыт работы с react и vuejs. Написал несколько конфигураторов + кроссворд.
								Имеется понимание при адаптировании сайта под мобильные устройства и планшеты.
								JavaScript на базовом уровне (хватает чтобы написать небольшой скрипт с нуля, внесение изменений в существующий скрипт).
								Люблю изучать новые технологии.
								Имеется желание повысть свои навыки во frontend разработке в команде профессионалов и новых проектов.
							</p>
						</div>

						<div className={"about"}>
							<h4>Коротко обо мне</h4>
							<p>
								Уравновешенный, спокойный. Не имею вредных привычек.
								Умею вникнуть в суть профессиональной задачи и решить ее используя доступные для этого ресурсы, подхожу к работе ответственно,
								Умею нести ответственность за принятые в ходе работы решения.
								Ориентированность на достижение результата.
								{/*Обладаю техническим мышлением.*/}
							</p>
						</div>

						{/*<div className={`${classes.aboutBlock}`}>*/}
						{/*<p>*/}
						{/*	При верстке использую gulp с собственным конфигом и компонентным подходом.*/}
						{/*	В сборке присутствует jade, scss, babel, спрайты png и svg иконок, автопрефиксер, оптимизация изображений.*/}
						{/*</p>*/}
						{/*<p>*/}
						{/*	Для более быстрого и чистого кодинга предпочитаю использовать препроцессоры (для html - jade/pug, для css - sass/scss).*/}
						{/*	JavaScript на базовом уровне (написание небольшого скрипта с нуля, внесение изменений в существующий скрипт, подключение и настройка библиотеки).*/}
						{/*</p>*/}
						{/*<p>*/}
						{/*	Классы называю по БЭМ-методологии.*/}
						{/*	<br/>*/}
						{/*	Умею адаптировать сайт под мобильные устройства и планшеты.*/}
						{/*	<br/>*/}
						{/*	Английский язык на базовом уровне.*/}
						{/*	<br/>*/}
						{/*	Использую bootstrap, но предпочитаю обходиться без него, т.к. названия классов и код чище и дальнейшая поддержка сайта становится легче.*/}
						{/*	Flexbox. Grid.*/}
						{/*	<br/>*/}
						{/*	Написал несколько конфигураторов на React, Vue.js и Javascript, есть в портфолило.*/}
						{/*	<br/>*/}
						{/*	На данный момент пишу сайт на react в связке с graphql + mysql.*/}
						{/*	Работаю с Git.*/}
						{/*	Созданию темы на drupal 7 и 8, php на уровне понимания кода, компонентное подключение css и js файлов.*/}
						{/*</p>*/}
						{/*</div>*/}

						<div className={"education"}>
							<h4>Образование</h4>
							<div className="timeline">
								<div className="timeline__item">
									<i className="mdi mdi-circle bg-primary text-info timeline-icon"></i>
									<div className="timeline__info">
										<div className="timeline__name">ЮУРГУ</div>
										<div className="timeline__specialization">Прикладная информатика в экономике</div>
										<div className="timeline__years">2011-2015</div>
									</div>
								</div>
								<div className="timeline__item">
									<i className="mdi mdi-circle bg-primary text-primary timeline-icon"></i>
									<div className="timeline__info">
										<div className="timeline__name">МАМТ Средне профессиональное</div>
										<div className="timeline__specialization">Техническое обслуживание и ремонт автотранспорта</div>
										<div className="timeline__years">2006-2011</div>
									</div>
								</div>
							</div>
						</div>

						<div className={"place-work"}>
							<h4>Место работы</h4>
							<div className="timeline">
								<div className="timeline__item">
									<i className="mdi mdi-circle bg-primary text-info timeline-icon"></i>
									<div className="timeline__info">
										<div className="timeline__name">ООО «Алгоритм Успеха»</div>
										<div className="timeline__specialization">Верстальщик</div>
										<div className="timeline__years">2015 - по настоящее время</div>
									</div>
								</div>
							</div>
						</div>
					{/*</div>*/}
				{/*</div>*/}
			</div>
			<Footer/>
		</div>
	)
}
export default About;