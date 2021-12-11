'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Cards', [
      { question: 'Есть ли на Марсе замерзшие подземные океаны? ', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Может ли рост человека увеличиться в космосе на 5см?', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'На МКС был записан музыкальный альбом?', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Любят ли космонавты приправлять еду острым соусом? ', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Можно ли приготовить пиццу на Венере за 9 секунд?', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Можно ли взорвать черную дыру водородной бомбой?', answer: 'Нет', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Звезды на небе мерцают от холода?', answer: 'Нет', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Kepler-37B (чуть больше Луны) можно считать планетой? ', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Атомные реакторы запускали на орбиту?', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Фотоны света в космосе двигаются со скоростью света? ', answer: 'Да', deck_id: 1, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Период 16-19 веков называют малым ледниковым периодом?', answer: 'Да', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Пятна на Солнце ассоциируют с изменением климата на Земле?', answer: 'Да', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Самые ранние записи изменений погоды были сделаны в Англии в 14 в.?', answer: 'Нет', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Прогноз на неделю сегодня точнее прогноза на день 40 лет назад? ', answer: 'Нет', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Потопы и наводнения связывают с разрушением озонового слоя Земли?', answer: 'Да', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Загрязнение окружающей среды приводит к образованию кислотных дождей?', answer: 'Да', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Конденсационный след самолета — облако? ', answer: 'Да', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Термин «Эль-Ниньо в Тихом океане» используется для измерения уровня воды? ', answer: 'Нет', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Ураганы и тайфуны – названия для одного и того же типа шторма?', answer: 'Да', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Циклы Миланковича и циклы Кондратьева описывают влияние климата на мировую экономику? ', answer: 'Нет', deck_id: 2, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Слово «робот» – чешского происхождения', answer: 'Да', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Первые прообразы роботов появились в 18 веке? ', answer: 'Да', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'В саудовском гражданском обществе есть робот-женщина?', answer: 'Да', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Айзек Азимов сформулировал два закона робототехники? ', answer: 'Нет', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Boston Dynamics принадлежит японской SoftBank? ', answer: 'Нет', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Министерство обороны Индии ведет разработку боевых роботов?', answer: 'Да', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Чаще всего роботов программируют на языке Ruby?', answer: 'Нет', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Русский робот Федор умеет садиться на шпагат? ', answer: 'Да', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Новейшие роботы-пылесосы исследуют помещение «наощупь»?', answer: 'Нет', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Роботы заменят половину работающего населения России к 2030 г.? ', answer: 'Нет', deck_id: 3, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Мамонты были современниками древних египтян?', answer: 'Да', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Турки любят собак? ', answer: 'Нет', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'На гербе разведки Пакистана изображен козел?', answer: 'Да', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Издревле жители Индии добавляли красный перец в еду для вкуса?', answer: 'Нет', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Вена 10 раз становилась самым комфортным для проживания городом в мире? ', answer: 'Да', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Vrijedno с сербского переводится как вредный? ', answer: 'Нет', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Судан ежегодно добывает более 200 т. золота?', answer: 'Нет', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Ынджера — блюдо эфиопской кухни?', answer: 'Да', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Яйцо Каддафи — роскошный отель в центре Хартума?', answer: 'Да', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
      { question: 'Основаня часть трудовых мигрантов в ОАЭ из Бангладеш? ', answer: 'Нет', deck_id: 4, createdAt: new Date(), updatedAt: new Date(), },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Cards', null, {});
    
  }
};
