import { createI18n } from "vue-i18n";

const messages = {
    en: {
        home: "Home",
        about: "About us",
        galery: "Galery",
        menu: "Menu",
        delivery: "Delivery",
        contact: "Contact",
        comments: "Comments",
        language: "Language",
        serbianLang: "Serbian",
        englishLang: "English"
    },
    rs: {
        home: "Почетна",
        about: "О нама",
        galery: "Галерија",
        menu: "Јеловник",
        delivery: "Достава",
        contact: "Контакт",
        comments: "Коментари",
        language: "Језик",
        serbianLang: "Српски",
        englishLang: "Енглески"
    }
}

const i18n = createI18n({
    locale: 'rs',
    fallbackLocale: 'rs',
    messages
});

export default i18n;