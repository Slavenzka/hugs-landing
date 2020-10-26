import iconPalm from 'assets/icons/card__palm.svg'
import iconHouse from 'assets/icons/card__house.svg'
import iconStudy from 'assets/icons/card__study.svg'
import iconPension from 'assets/icons/card__pension.svg'
import chart from 'assets/images/chart.png'
import eric from 'assets/images/bg_eric.png'
import shvets from 'assets/images/bg_shvets.png'
import sherbina from 'assets/images/bg_sherbina.png'
import { ButtonPalettes, ModalThemes } from 'utils/const'

export const data = {
  header: {
    navigation: [
      {
        label: 'Мета',
        id: 'meta'
      },
      {
        label: 'Портфелi',
        id: 'portfolios'
      },
      {
        label: 'Стратегії',
        id: 'strategies'
      },
      {
        label: 'Наша команда',
        id: 'team'
      },
      {
        label: 'Тарифні карти',
        id: 'prices'
      },
    ],
    button: {
      label: 'Бескоштовна консультація'
    }
  },
  banner: {
    heading: `Перший інвестиційний Robo-advisor в Україні`,
    descriptor: `Ідеальне рішення для тих, хто не готовий витрачати багато часу на фінансове планування і самостійний трейдинг.`,
    slogan: `12 -15% річних в USD — це абсолютно реально`,
    buttonLabel: `Старт HUG’S`,
    hint: `Рекомендовано для активів від $ 10 000`,
    tickers: [
      'SPY',
      'TLT',
      'GLD',
      'BRKB',
      'QQQ',
      'EQR',
      'VNQ'
    ]
  },
  meta: {
    heading: `Які потреби допомагає вирішувати HUG<span>'</span>S`,
    descriptor: `Всі Ваші активи мають ефективно працювати, це дозволяє швидше реалізувати поставлені завдання. <span>Наша мета: Ваша прибутковість, зручність і вільний час</span>`,
    cards: [
      {
        label: `Накопичення на подорож або велику покупку`,
        icon: iconPalm,
        iconSize: '18.1rem 14.3rem',
        iconPosition: '90% 0'
      },
      {
        label: `Купівля<br />квартири або<br />будинку`,
        icon: iconHouse,
        iconSize: '15.7rem 10.3rem',
        iconPosition: '90% 2rem'
      },
      {
        label: `Відправити<br />дитину у коледж<br />мрії`,
        icon: iconStudy,
        iconSize: '15rem 16rem',
        iconPosition: '90% -1rem'
      },
      {
        label: `Довгострокові накопичення, наприклад на пенсію`,
        icon: iconPension,
        iconSize: '18rem 14rem',
        iconPosition: '90% 0'
      },
    ],
  },
  account: {
    heading: `Всі гроші зберігаються на Вашому особистому рахунку!`,
    descriptor: `Ми підключаємо наш алгоритм до вашого аккаунту та процес торгівлі відбувається автоматично під спостереженням досвідченого брокера.`,
    hint: `Допомога у відкритті рахунку у брокера ( Interactive Brokers)`
  },
  portfolio: {
    heading: `Для кожного клієнта портфель формується індивідуально`,
    descriptor: `Портфель HUG'S формується на підставі опитування RISK ID клієнта, цілей накопичення, термінів накопичення і суми.`,
    subheading: `Калькулятор очікуваного доходу`,
    form: [
      {
        type: `select`,
        name: `calculator-amount`,
        label: `Сума інвестиції`,
        options: [
          {
            label: `5 000`,
            value: `5 000`
          },
          {
            label: `10 000`,
            value: `10 000`,
            isDefault: true
          },
          {
            label: `15 000`,
            value: `15 000`
          },
          {
            label: `25 000`,
            value: `25 000`
          },
          {
            label: `50 000`,
            value: `50 000`
          },
        ]
      },
      {
        type: `select`,
        name: `calculator-duration`,
        label: `Термін інвестування`,
        options: [
          {
            label: `1 рiк`,
            value: `1`
          },
          {
            label: `2 роки`,
            value: `2`
          },
          {
            label: `10 рокiв`,
            value: `10`,
            isDefault: true
          },
          {
            label: `15 рокiв`,
            value: `15`
          },
          {
            label: `20 рокiв`,
            value: `20`
          },
        ]
      },
      {
        type: `select`,
        name: `calculator-riskId`,
        label: ` Ваш Risk ID`,
        options: [
          {
            label: `1`,
            hint: 'min ризик',
            value: `1`,
            isDefault: true
          },
          {
            label: `2`,
            value: `2`
          },
          {
            label: `3`,
            value: `3`
          },
          {
            label: `4`,
            value: `5`
          },
          {
            label: `6`,
            value: `6`
          },
        ]
      },
      {
        type: `button`,
        label: ` Розрахувати`,
      },
    ],
    resultLabel: `Очікувана сума інвестиції з урахуванням доходу`,
    buttonLabel: `Дізнатися мій Risk ID`
  },
  company: {
    heading: `Компанія HUG<span>’</span>S сьогодні — це`,
    list: [
      {
        key: `300`,
        isMore: true,
        value: `активних рахунків на Interactive Brockers`
      },
      {
        key: `260 млн`,
        isMore: true,
        value: `гривень в управлінні`
      },
      {
        key: `5 000`,
        isMore: true,
        value: `транзакцій щодня`
      },
    ],
    link: {
      label: `<span>+ WMHUG’S</span> для активів понад $500 000`,
      url: `http://wmhugs.com`,
    }
  },
  strategies: {
    heading: `Стратегії HUG<span>’</span>S максимально надійні`,
    descriptor: `У&nbsp;портфелі клієнтів HUG&rsquo;S входять основні класи актівів заможніх американців.<br/>
      Заможні американці інвестують в&nbsp;три класи активів: <span>облігації, нерухомість і&nbsp;акції</span>.<br/>
      Стратегія HUGS&rsquo;A пропонує просте проходження за&nbsp;динамікою активів населення США.`,
    image: chart,
    legend: [
      {
        label: `<span>HUGS'A</span> &mdash;&nbsp;стратегія активів HUG&rsquo;S`,
        highlightColor: `rgb(29, 202, 105)`,
        link: {
          label: `Переглянути детальний опис`,
          url: `#`
        }
      },
      {
        label: `<span>SPY</span> &mdash;&nbsp;інвестиційний фонд США, портфель якого складається з&nbsp;акцій компаній, що&nbsp;враховуються при розрахунку індексу&nbsp;S &amp;&nbsp;P500 (500 провідних компаній США).`,
        highlightColor: `rgb(114, 2, 221)`,
      },
    ]
  },
  team: {
    heading: `Команда професiоналiв HUG&rsquo;S`,
    list: [
      {
        subheading: `Эрик Найман&nbsp;&mdash; Ідейний лідер HUG&rsquo;S`,
        sublist: [
          `Має успішний досвід з&nbsp;управління активами на&nbsp;глобальних фінансових ринках з&nbsp;1995&nbsp;р.`,
          `Засновник інвестиційного-банківського напрямку &laquo;Укрсоцбанку&raquo;.`,
          `Автор 5&nbsp;книг по&nbsp;інвестуванню та&nbsp;трейдингу.`
        ],
        photo: eric,
        hint: `Ми&nbsp;постійно стежимо за&nbsp;новинами на&nbsp;ринку і&nbsp;ділимося ними з&nbsp;Вами`,
        link: {
          label: `Підписуйтесь на&nbsp;наш YouTube канал`,
          url: `https://www.youtube.com/hugsfund`
        }
      },
      {
        subheading: `Сергій Швець&nbsp;&mdash; Директор компанії`,
        sublist: [
          `Більше 7&nbsp;років керував Управлінням цінних паперів в&nbsp;Райффайзен Банк Аваль.`,
          `Засновник інвестиційного-банківського напрямку &laquo;Укрсоцбанку&raquo;.`,
          `Автор 5&nbsp;книг по&nbsp;інвестуванню та&nbsp;трейдингу.`
        ],
        photo: shvets,
        hint: `Ми&nbsp;постійно стежимо за&nbsp;новинами на&nbsp;ринку і&nbsp;ділимося ними з&nbsp;Вами`,
        link: {
          label: `Підписуйтесь на&nbsp;наш YouTube канал`,
          url: `https://www.youtube.com/hugsfund`
        }
      },
      {
        subheading: `Артем Щербина&nbsp;&mdash; Головний аналітик`,
        sublist: [
          `10-річний досвід особистого інвестування на&nbsp;фондовому ринку України і&nbsp;США.`,
          `Більше 30&nbsp;наукових робіт в&nbsp;галузі інвестування.`,
          `Реалізовано інвестиційних стратегій обсягом понад $&nbsp;100&nbsp;млн.`
        ],
        photo: sherbina,
        hint: `Ми&nbsp;постійно стежимо за&nbsp;новинами на&nbsp;ринку і&nbsp;ділимося ними з&nbsp;Вами`,
        link: {
          label: `Підписуйтесь на&nbsp;наш YouTube канал`,
          url: `https://www.youtube.com/hugsfund`
        }
      },
    ],
  },
  prices: {
    heading: `Тарифнi карти HUG<span>’</span>S`,
    descriptor: `Кожна тарифна карта HUG&rsquo;S включає певні стратегії і&nbsp;унікальні послуги для ефективного інвестування`,
    tabs: [
      {
        trigger: `Індивідуальним клієнтам`,
        content: [
          {
            type: `HUGS'START`,
            bgColor: `rgb(29, 202, 105)`,
            passive: {
              price: {
                old: `$ 199`,
                new: `$ 99`
              },
              purpose: `Для тих кому потрібна допомога почати інвестувати`
            },
            active: {
              list: [
                {
                  key: `Інвестиційні продукти`,
                  value: `HUGS’A, HUGS’ON, HUGS’D*, HUGS’GROWTH*`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
                {
                  key: `Допомога у відкриття рахунку у брокера (Interactive Brokers)`,
                  value: `<span>+</span> Включено`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.LIGHT,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
          {
            type: `HUGS<span>'</span>MASTER`,
            bgColor: `rgb(114, 0, 222)`,
            passive: {
              price: {
                old: `$ 499`,
                new: `$ 349`
              },
              purpose: `Всього за&nbsp;1&nbsp;$ в&nbsp;день ви&nbsp;отримуєте надійного помічника в&nbsp;світі інвестицій`
            },
            active: {
              list: [
                {
                  key: `Інвестиційні продукти`,
                  value: `HUGS’A, HUGS’ON, HUGS’D*, HUGS’GROWTH*`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
                {
                  key: `Допомога у відкриття рахунку у брокера (Interactive Brokers)`,
                  value: `<span>+</span> Включено`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.DARK,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
          {
            type: `HUGS<span>'</span>BLACK`,
            bgColor: 'black',
            passive: {
              price: {
                old: `$ 1299`,
                new: `$ 1000 / piк`
              },
              purpose: `Ексклюзивний сервіс`
            },
            active: {
              list: [
                {
                  key: `Інвестиційні продукти`,
                  value: `HUGS’A, HUGS’ON, HUGS’D*, HUGS’GROWTH*`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
                {
                  key: `Допомога у відкриття рахунку у брокера (Interactive Brokers)`,
                  value: `<span>+</span> Включено`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.DARK,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
        ]
      },
      {
        trigger: `Корпоративним кліентам`,
        content: [
          {
            type: `HUG'S K BITE`,
            bgColor: `rgb(29, 202, 105)`,
            passive: {
              price: {
                new: `$ 2000`
              },
              purpose: `до 15 співробітників`
            },
            active: {
              list: [
                {
                  key: `Кількість співробітників`,
                  value: `до 15 співробітників`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.LIGHT,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
          {
            type: `HUG<span>'</span>S <span>M</span> BITE`,
            bgColor: `rgb(114, 0, 222)`,
            passive: {
              price: {
                new: `$ 5000`
              },
              purpose: `до 40 співробітників`
            },
            active: {
              list: [
                {
                  key: `Кількість співробітників`,
                  value: `до 40 співробітників`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.DARK,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
          {
            type: `HUG<span>'</span>S <span>G</span> BITE`,
            bgColor: `rgb(81, 16, 144)`,
            passive: {
              price: {
                new: `$ 60 000`
              },
              purpose: `до 500 співробітників`
            },
            active: {
              list: [
                {
                  key: `Кількість співробітників`,
                  value: `до 500 співробітників`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.DARK,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
          {
            type: `HUG<span>'</span>S <span>T</span> BITE`,
            bgColor: `rgb(19, 19, 19)`,
            passive: {
              price: {
                label: `ціна розраховується індивідуально`
              },
              purpose: `до 1 000 співробітників`
            },
            active: {
              list: [
                {
                  key: `Кількість співробітників`,
                  value: `до 1 000 співробітників`
                },
                {
                  key: `Валюта інвестування`,
                  value: `USD`
                },
                {
                  key: `Комунікація з клієнтом`,
                  value: `Дистанційно`
                },
              ],
              buttons: [
                {
                  palette: ButtonPalettes.PALE,
                  label: `Детальніше`,
                  type: 'details'
                },
                {
                  palette: ButtonPalettes.DARK,
                  label: `Замовити`,
                  type: 'order'
                },
              ]
            }
          },
        ]
      },
    ],
    notification: `Компанія HUG&rsquo;S Не&nbsp;бере фіксовану комісію за&nbsp;свої послуги. Ми&nbsp;отримуємо тільки премію за&nbsp;успіх в&nbsp;розмірі&nbsp;12% від прибутку. Розрахунок прибутку та&nbsp;стягування премії проводиться відповідно до&nbsp;умов кожного конкретного портфеля. Брокер автоматично розрахує і&nbsp;спише потрібну суму з&nbsp;вашого брокерського рахунку за&nbsp;підсумками звітного періоду, відповідно до&nbsp;Вашого брокерського договору з&nbsp;Interactive Brokers.`
  },
  promotion: {
    heading: `Відстежуйте стан Ваших активів онлайн`,
    descriptor: `Для Вашої зручності ми&nbsp;розробили мобільний додаток, який відображає стан ваших активів, дозволяє стежити за&nbsp;ребалансом Вашого портфеля, а&nbsp;також замовляти і&nbsp;підтверджує Транзакції онлайн.`,
    hint: `Додаток доступний тільки для діючих клієнтів HUG'S в Apple Store (Play Market очікується)`,
    button: {
      label: `Почати інвестувати`
    }
  },
  modalDetails: {
    heading: `Тарифи HUG’S`,
    tabs: [
      {
        label: `Індивідуальним клієнтам`,
        theme: ModalThemes.BLACK,
        table: {
          headings: [
            {
              label: `HUGS'START`,
              bgColor: `rgb(29, 202, 105)`,
            },
            {
              label: `HUGS<span>'</span>MASTER`,
              bgColor: `rgb(114, 0, 222)`,
            },
            {
              label: `HUGS<span>'</span>BLACK`,
              bgColor: `rgb(0, 0, 0)`,
            },
          ],
          rows: [
            [
              {
                key: `Інвестиційні продукти HUGS&rsquo;FUND`,
                value: `HUGS&rsquo;A-сбалансована накопичувальная стратегія (горизонт інвестування від 3&nbsp;років), HUGS&rsquo;ON- передбачає активне управління руками проафесіоналів, HUGS&rsquo;GROWTH,HUGS&rsquo;D-тематичні інвестаційні пропозиції.`
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Початкова консультація інвестаційного радника`,
                value: `допомога у&nbsp;відкритті рахунку у&nbsp;брокера, консультування до&nbsp;формування стратегій інвестування.`
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Персональный інвестаційний радник- консультація та&nbsp;підтримка`,
              },
              {
                status: false,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Щомісячна зустріч HUG&rsquo;S CLUB&nbsp;&mdash; закритий клуб онлайн`,
              },
              {
                status: false,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Мобільний додаток-перший інвестаційний консьерж`,
              },
              {
                status: false,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Доступ в&nbsp;чат Hugs Black`,
                value: `доступ до&nbsp;відбірних інвестідей в&nbsp;закритому каналі, success rate-70%`
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Інвестаційні стратегії WM&nbsp;HUGS`,
                value: `персональні тематичні інвестаційні пропозиції`
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                label: `Rate, Founders, China, портфель облігацій, операції з&nbsp;ОВГЗ Україні`,
              },
            ],
            [
              {
                key: `Аналіз інвестаційних ідей по&nbsp;запиту-рейтингування інструменів портфель`,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                label: `Не&nbsp;більше 5&nbsp;ідей на&nbsp;рік`,
              },
            ],
            [
              {
                key: `Портфель HUGS Erik Naiman`,
                value: `із&nbsp;динамічним ризик профілем як&nbsp;у&nbsp;Еріка Наймана`
              },
              {
                status: false,
              },
              {
                label: `HUGS&rsquo;ON EN`
              },
              {
                label: `HUGS&rsquo;ON EN`,
              },
            ],
            [
              {
                key: `Школа індивідуального інвестора`,
                value: `уроки Еріка Наймана та&nbsp;ведучого аналітика HUGS як&nbsp;стати професійним інвестором`
              },
              {
                label: `30&nbsp;днів`,
              },
              {
                label: `180 днів`
              },
              {
                label: `365 днів+ можливість завантаження`,
              },
            ],
            [
              {
                key: `Доступ в&nbsp;чат Hugs Well`,
              },
              {
                label: `30&nbsp;днів`,
              },
              {
                label: `180 днів`
              },
              {
                label: `365 днів`,
              },
            ],
            [
              {
                key: `Події HUG&rsquo;S`,
                value: `вебінари,тематічні зустрічі,майстер-класси Еріка Наймана`
              },
              {
                label: `10%`,
              },
              {
                label: `до&nbsp;20%`
              },
              {
                label: `до&nbsp;50%`,
              },
            ],
          ],
          results: [
            {
              label: `замовити&nbsp;за`
            },
            {
              link: {
                label: `$ 100`,
                bgColor: `rgb(29, 202, 105)`,
                url: `#`
              }
            },
            {
              link: {
                label: `$ 350`,
                bgColor: `rgb(114, 0, 222)`,
                url: `#`
              }
            },
            {
              link: {
                label: `$ 1000`,
                bgColor: `rgb(0, 0, 0)`,
                url: `#`
              }
            },
          ]
        }
      },
      {
        label: `Корпоративним кліентам`,
        theme: ModalThemes.PURPLE,
        table: {
          headings: [
            {
              label: `HUG'S K BITE`,
              bgColor: `rgb(29, 202, 105)`,
            },
            {
              label: `HUG'S <span>M</span> BITE`,
              bgColor: `rgb(114, 0, 222)`,
            },
            {
              label: `HUG'S <span>G</span> BITE`,
              bgColor: `rgb(81, 16, 144)`,
            },
            {
              label: `HUG'S <span>T</span> BITE`,
              bgColor: `rgb(0, 0, 0)`,
            },
          ],
          rows: [
            [
              {
                key: `Відкриття рахунків інвестора всім співробітникам компанії`,
                value: `Далі інвестори-співробітники самостійно поповнюють свої рахунки на&nbsp;бажану суму інвестування і&nbsp;обирають термін. HUG&rsquo;S підключає стратегію доходу згідно RISK ID&nbsp;вашої компанії. Інвестори мають можливість стежити онлайн за&nbsp;своїми доходами.`
              },
              {
                label: `до&nbsp;15&nbsp;співробітників`,
              },
              {
                label: `до&nbsp;40&nbsp;співробітників`,
              },
              {
                label: `до&nbsp;500&nbsp;співробітників`,
              },
              {
                label: `більше 1000 співробітників`,
              },
            ],
            [
              {
                key: `Початкова консультація інвестаційного радника`,
                value: `консультування до&nbsp;формування стратегій інвестування`
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Доступ до&nbsp;освітнього контенту від Еріка Наймана`,
                value: `відео контент`
              },
              {
                status: false,
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Доступ в&nbsp;чат Life HUG&rsquo;S`,
              },
              {
                label: `2&nbsp;місяці`,
              },
              {
                label: `3&nbsp;місяці`,
              },
              {
                label: `6&nbsp;місяців`,
              },
              {
                label: `12&nbsp;місяців`,
              },
            ],
            [
              {
                key: `Мобільний додаток-перший інвестаційний консьерж`,
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Базове навчання від аналітиків HUG&rsquo;S`,
                value: `ZOOM Format (1&nbsp;заняття&nbsp;&mdash; 45&nbsp;хвилин)`
              },
              {
                label: '',
              },
              {
                label: '2&nbsp;заняття',
              },
              {
                label: '15&nbsp;занятть',
              },
              {
                label: '25&nbsp;занять',
              },
            ],
            [
              {
                key: `Корпоративный радник HUG&rsquo;S&nbsp;&mdash; консультація та&nbsp;підтримка`,
              },
              {
                status: false,
              },
              {
                status: true,
              },
              {
                status: true,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Налаштування внутрішнього фонду компанії`,
                value: `від 800&nbsp;000 тисяч доларів (аналог INSIDER FUND HUGS)`
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Консультація від Еріка Наймана для топ менеджменту`,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: true,
              },
            ],
            [
              {
                key: `Інвестаційні стратегії WM&nbsp;HUG&rsquo;S`,
                value: `персональні тематичні інвестаційні пропозиції, знижена комісія за&nbsp;управління`
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: false,
              },
              {
                status: true,
              },
            ],
          ],
          results: [
            {
              label: `замовити&nbsp;за`
            },
            {
              link: {
                label: `$ 2000`,
                bgColor: `rgb(29, 202, 105)`,
                url: `#`
              }
            },
            {
              link: {
                label: `$ 5000`,
                bgColor: `rgb(114, 0, 222)`,
                url: `#`
              }
            },
            {
              link: {
                label: `$ 60 000`,
                bgColor: `rgb(81, 16, 144)`,
                url: `#`
              }
            },
            {
              link: {
                notification: `ціна розраховується індивідуально`,
                bgColor: `rgb(0, 0, 0)`,
                url: `#`
              }
            },
          ]
        }
      },
    ]
  }
}
