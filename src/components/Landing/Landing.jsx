import React, {Component} from 'react'
import Foundation from './Landing components/Foundation/Foundation'
import Contact from './Landing components/Contact/Contact'

class Landing extends Component{
    render() {
        return (
            <div className='mobileNav '>
            <div className='mt-3 m-5'>
            <div className='flex'>
                <div className='w-1/2 z-10 mediaQHaft'>
                    <h1 className='p-5 header rounded-lg font-semibold '>I help people build interactive and compelling websites.</h1>
                    <div className='ml-5'>
                    <h2 className='text-1xl rounded-lg font-medium m-1'>I work with a strong focus on simplicity, accessibility <br/> and responsive design.</h2>
                    <br/>
                    <button className='p-2 mr-auto ml-1 my-1 text-xl font-bold bg-main-100 '>Contact</button>
                    <button className='p-2 mr-auto ml-1 my-1 text-xl font-bold border-comp-100 border-2'>Get to Know Me</button>
                    </div>
                </div>
                <title id='landing'>Two women sitting down and relaxing. As they relax they look foward to the future. Behind these women there is a rose.</title>
                <svg className='w-1/2 h-auto left-1/2 absolute DT_ONLY' id='landing' width="774.04004" height="706.43253" viewBox="0 0 774.04004 706.43253"><circle cx="149.65781" cy="72.35366" r="72.35366" fill="#ff6884"/><path d="M774.04004,407.35411h0c0,.46393-.3761,.84003-.84003,.84003H0v-1.68005H773.20001c.46393,0,.84003,.3761,.84003,.84003Z" fill="#e6e6e6"/><g><path d="M374.9857,150.10933c-2.38783-4.02633-12.71785,.28473-14.617-3.36934-1.89242-3.64087,7.70535-9.1884,13.18875-21.86128,.98893-2.28538,7.22029-16.68721,2.60723-21.13111-8.744-8.42336-48.75681,26.33771-62.75946,14.96223-3.07313-2.49641-5.21999-7.48008-14.52068-15.57149-3.70008-3.21891-5.93739-4.67227-8.10272-4.13154-3.07244,.7672-3.31583,4.87924-6.61043,12.96435-4.94086,12.12525-7.86312,11.39309-10.74188,21.06706-2.13702,7.18145-1.64885,11.35666-4.16356,12.17004-3.55853,1.15111-6.83397-6.46612-11.3438-5.7841-4.60201,.69608-7.38428,9.56506-8.26308,16.20543-1.6492,12.46116,2.92709,20.68385,5.46355,29.33006,2.75637,9.39623,4.39228,23.68586-1.9732,43.91486l-63.00398,177.51415c13.90935-36.42537,54.18351-136.27703,71.10669-173.38261,4.88545-10.71159,10.27961-21.57646,21.35551-25.86448,10.66351-4.12852,25.30848-1.66361,43.97908-6.16153,2.18052-.52519,8.23149-2.06478,8.99308-5.62383,.62971-2.94237-2.92951-4.58475-2.38265-7.34052,.73346-3.69645,7.73262-3.74185,16.33369-8.00648,6.06495-3.00727,9.8434-6.58359,13.0926-9.65913,.97961-.92722,15.5412-14.88093,12.36243-20.24074h-.00017Z" fill="#f2f2f2"/><path d="M127.10928,243.56021c-2.66514,.01018-3.52971,6.32414-5.8711,6.20193-2.33303-.1217-2.28651-6.43298-6.92425-12.78085-.83634-1.14472-6.1069-8.35862-9.61909-7.3766-6.65712,1.86117-1.14118,31.52939-10.76458,35.11986-2.1119,.788-5.17744,.40375-11.83223,2.63399-2.64745,.88726-4.00631,1.566-4.3657,2.78477-.50992,1.72929,1.438,3.03533,4.45563,6.98501,4.52554,5.92349,3.32299,7.14658,7.2404,11.35071,2.90811,3.12094,5.0982,4.08605,4.77178,5.55495-.46175,2.07867-5.14542,1.48849-6.11191,3.89868-.98617,2.45956,2.56399,6.38404,5.56954,8.73131,5.64023,4.40488,10.99632,4.53132,15.97179,5.78117,5.40702,1.35825,12.89254,4.6784,20.98438,13.63937l68.94646,82.14125c-13.86455-17.33669-51.25202-65.91389-64.58076-84.92611-3.84775-5.48841-7.62387-11.27079-6.53266-17.94422,1.05047-6.42495,6.4858-12.90151,9.66526-23.36298,.37139-1.22179,1.36162-4.63585-.16537-6.03656-1.26245-1.15801-3.09548,.11505-4.29026-.94854-1.60259-1.42661,.39461-4.87492,.78308-10.32682,.27395-3.84439-.39115-6.73074-.96313-9.21291-.17245-.7483-2.81955-11.9213-6.3673-11.90766v.00026Z" fill="#f2f2f2"/><path d="M180.27805,255.4954l-1.6057-14.33373,.73363-1.08663c3.3948-5.02475,5.12513-9.93187,5.14585-14.58981,.00345-.74053-.03116-1.48115-.06577-2.2355-.13844-2.98993-.3114-6.70658,1.6265-11.03922,1.08663-2.41545,4.13888-8.00778,8.7276-7.31566,1.23543,.17305,2.16982,.74053,2.87919,1.40494,.10383-.16606,.21111-.3322,.3253-.51216,1.4292-2.18017,2.5608-3.11447,3.65088-4.01425,.83746-.69211,1.70262-1.40494,3.05915-3.09376,.59519-.74053,1.05893-1.39113,1.45-1.9379,1.18701-1.65412,2.7373-3.62672,5.47115-3.59211,2.92071,.13844,4.45028,2.55389,5.46424,4.15269,1.80991,2.85149,2.63002,4.90712,3.17333,6.27054,.1973,.49835,.42223,1.05893,.53641,1.23198,.94129,1.38423,8.59269,.08993,11.47525-.38071,6.47475-1.07973,12.07743-2.01403,14.38569,2.06944,1.6542,2.92071,.42568,6.7827-3.7617,11.78674-1.30465,1.55728-2.69233,2.74075-3.92431,3.66823,1.02087,.60908,1.93436,1.54338,2.3048,3.01073h0c.87207,3.47438-2.11441,6.95575-8.87294,10.361-1.67837,.85127-3.93812,1.98641-7.10455,2.53318-1.49151,.25608-2.83422,.3184-3.98309,.35301-.02425,.66441-.17995,1.38423-.58483,2.12476-1.18701,2.18017-3.65779,3.2183-7.38143,2.96913-4.09736-.21456-7.47136-.99661-10.44748-1.68182-2.59886-.59519-4.8379-1.10044-6.59584-.9828-3.25982,.26298-5.77228,2.87229-8.72061,6.25673l-7.36063,8.60297h-.00009Z" fill="#f2f2f2"/><path d="M187.72663,170.15234l-13.45769,5.18892-1.23716-.43405c-5.72153-2.00928-10.90699-2.43832-15.41786-1.27686-.71723,.18453-1.42479,.40583-2.14574,.63066-2.85701,.89227-6.40829,2.00238-11.09074,1.2268-2.61215-.43836-8.79569-1.97234-9.29016-6.58652-.14595-1.23888,.16597-2.28668,.62876-3.1414-.18703-.05826-.37493-.11988-.57793-.1847-2.47138-.82952-3.66219-1.68709-4.80907-2.51333-.88191-.63455-1.79092-1.29058-3.76852-2.17439-.86732-.38787-1.61424-.6714-2.24232-.91099-1.90113-.72854-4.2024-1.72791-4.86232-4.38115-.60693-2.86029,1.34159-4.95251,2.63088-6.3389,2.29919-2.47397,4.0795-3.78872,5.26055-4.6601,.43198-.31719,.91721-.67701,1.05565-.83133,1.10018-1.26158-2.09248-8.33446-3.27889-11.0034-2.68672-5.98909-5.01164-11.17153-1.64713-14.44006,2.40561-2.34088,6.45291-2.13218,12.35544,.64896,1.83727,.86698,3.33404,1.90908,4.54367,2.86556,.33022-1.14196,1.00222-2.26268,2.32768-2.99303h0c3.13959-1.72481,7.26457,.28094,12.27275,5.95465,1.24915,1.40753,2.92036,3.30547,4.25237,6.22963,.626,1.37776,1.02682,2.66074,1.35178,3.76334,.64887-.14509,1.38457-.17702,2.20365,.02676,2.40993,.59519,4.04092,2.72185,4.74434,6.38689,.83176,4.01778,.9311,7.47982,1.0232,10.53241,.08346,2.66489,.16261,4.95881,.72241,6.62942,1.08128,3.08651,4.24245,4.8549,8.26412,6.84838l10.18864,4.93776-.00035,.00009Z" fill="#f2f2f2"/><path d="M180.27805,127.92473l-1.6057-14.33373,.73363-1.08663c3.3948-5.02475,5.12513-9.93187,5.14585-14.58981,.00345-.74053-.03116-1.48115-.06577-2.2355-.13844-2.98993-.3114-6.70658,1.6265-11.03922,1.08663-2.41545,4.13888-8.00778,8.7276-7.31566,1.23543,.17305,2.16982,.74053,2.87919,1.40494,.10383-.16606,.21111-.3322,.3253-.51216,1.4292-2.18017,2.5608-3.11447,3.65088-4.01425,.83746-.69211,1.70262-1.40494,3.05915-3.09376,.59519-.74053,1.05893-1.39113,1.45-1.9379,1.18701-1.65412,2.7373-3.62672,5.47115-3.59211,2.92071,.13844,4.45028,2.55389,5.46424,4.15269,1.80991,2.85149,2.63002,4.90712,3.17333,6.27054,.1973,.49835,.42223,1.05893,.53641,1.23198,.94129,1.38423,8.59269,.08993,11.47525-.38071,6.47475-1.07973,12.07743-2.01403,14.38569,2.06944,1.6542,2.92071,.42568,6.7827-3.7617,11.78674-1.30465,1.55728-2.69233,2.74075-3.92431,3.66823,1.02087,.60908,1.93436,1.54338,2.3048,3.01073h0c.87207,3.47438-2.11441,6.95575-8.87294,10.361-1.67837,.85127-3.93812,1.98641-7.10455,2.53318-1.49151,.25608-2.83422,.3184-3.98309,.35301-.02425,.66441-.17995,1.38423-.58483,2.12476-1.18701,2.18017-3.65779,3.2183-7.38143,2.96913-4.09736-.21456-7.47136-.99661-10.44748-1.68182-2.59886-.59519-4.8379-1.10044-6.59584-.9828-3.25982,.26298-5.77228,2.87229-8.72061,6.25673l-7.36063,8.60297h-.00009Z" fill="#f2f2f2"/><path d="M194.94398,406.15502l-3.00382-1.88258-.72672-3.46748,.72672,3.46748-3.50209,.40142c-.05541-.3253-.24572-1.07282-.53287-2.24249-1.56764-6.40898-6.34667-25.91281-10.33329-56.62883-2.78235-21.44173-4.35689-43.48556-4.68219-65.52947-.3253-22.07844,.71982-38.7931,1.55728-52.22697,.63325-10.13254,1.40158-19.78062,2.15592-29.17962,2.00712-25.10996,3.90006-48.82871,2.49158-75.08754-.3114-5.86221-.96554-18.06419-8.09426-31.0483-4.13542-7.53023-9.83149-14.216-16.93259-19.86365l4.41567-5.55072c7.83818,6.24284,14.13988,13.64852,18.73214,22.0093,7.90395,14.39596,8.61686,27.69156,8.95942,34.07974,1.43265,26.72257-.481,50.66977-2.50893,76.02192-.74752,9.3643-1.51576,18.97087-2.14556,29.06189-.83055,13.30941-1.86523,29.87855-1.54338,51.67329,.3184,21.78084,1.87559,43.55478,4.61988,64.72662,3.93812,30.32848,8.64802,49.54162,10.19485,55.85368,.82365,3.37064,.99661,4.07656,.15225,5.41237v-.00009Z" fill="#f2f2f2"/><path d="M141.06972,84.12777c-.29069,0-.58483-.0069-.88243-.02771-6.03526-.3253-11.62405-3.93812-16.61419-10.73472-2.33933-3.19759-3.5367-6.84502-5.92453-14.11917-.37027-1.12124-2.16982-6.81041-3.26335-14.63823-.71637-5.11478-.62635-7.25335,.38762-9.14283,1.1247-2.10405,2.94496-3.57131,4.9936-4.56101-.08993-.6783-.01735-1.37732,.27688-2.09024,1.20773-2.95532,4.41912-2.5677,6.15636-2.38084,.87897,.11073,1.97597,.25608,3.15952,.19376,1.86178-.08993,2.86193-.64369,4.37761-1.47425,1.45-.79594,3.25291-1.78565,5.92798-2.33242,5.27393-1.10044,9.69305,.39452,11.14995,.88588,7.66513,2.55389,11.4441,8.51303,15.81825,15.41337,.87207,1.38423,3.86545,6.42279,5.84141,13.33013,1.42574,4.98324,1.22507,7.19802,.79594,8.84524-.87207,3.38445-2.93106,5.32235-8.16003,9.59967-5.46079,4.47799-8.20154,6.72047-10.55476,8.0839-5.47805,3.16298-8.91791,5.1493-13.48583,5.1493v.00017Z" fill="#f2f2f2"/></g><path id="b-82" d="M516.1732,354.1277c8.33826,8.97926,19.73016,11.95537,25.44375,6.64791,5.71359-5.30746,3.58485-16.88698-4.75759-25.86833-3.28325-3.63339-7.38888-6.42768-11.97342-8.14905l-35.81001-37.59933-17.28607,17.18068,37.13756,35.24223c1.37865,4.70063,3.86323,9.00264,7.24578,12.54589Z" fill="#ffb6b6"/><g><path id="c-83" d="M441.04403,328.35462c11.59655,3.95902,23.03925,1.18462,25.55758-6.19591,2.51833-7.38053-4.8409-16.57067-16.44211-20.52954-4.61252-1.64497-9.5519-2.16143-14.40491-1.50611l-49.34688-16.154-7.08701,23.31862,49.3997,13.44928c3.44057,3.487,7.66635,6.09911,12.32363,7.61767Z" fill="#a0616a"/><path d="M277.29607,187.07934s-30.5895,36.80058-12.89297,52.02664c17.69653,15.22606,96.72429,71.59186,96.72429,71.59186l30.80874,4.79745,7.87991-29.78098-69.56776-51.54926-52.95221-47.08571Z" fill="#6c63ff"/></g><path d="M388.77571,156.27831c.05076,.00866,.1268,.02155,.21899,.03681,1.80387,.2986,12.70989,1.98125,23.70538-2.20727,4.65806-1.7744,3.06907-2.21665,13.44328-8.3856,12.16264-7.23242,15.28399-7.18188,16.18972-10.55423,1.80853-6.73404-7.84857-17.32007-14.24053-16.62308-1.68285,.18351-3.48511,1.1868-6.28828,.5065-.61587-.14946-3.31186-.80374-4.62616-3.03534-1.17245-1.99075-.17942-3.42682-.65095-5.05952-1.23768-4.28562-11.5548-6.42438-20.60012-4.91323-5.20249,.86916-9.24902,3.24201-17.12958,7.95224-13.71643,8.19828-20.57457,12.29743-22.11596,18.57778-1.46097,5.95263,2.04553,8.51755-.50467,14.88965-2.37459,5.9332-6.14608,5.53692-7.44391,10.33663-2.0885,7.72365,5.66305,16.2004,8.8921,19.73157,3.54025,3.87149,6.92605,5.9963,11.42094,8.81713,5.64188,3.54063,8.46275,5.31094,11.8543,5.13083,6.14905-.32656,24.42098,.78506,24.65931-4.30345,.0893-1.907,22.25008-.34556,11.33802-20.87657-1.33842-2.51823-27.55824,.17163-27.9043-1.27502" fill="#2f2e41"/><circle cx="393.76418" cy="144.24372" r="34.64238" fill="#ffb6b6"/><path d="M382.60605,146.48549c.05076,.00866,.1268,.02155,.21899,.03681,1.80387,.2986,12.70989,1.98125,23.70538-2.20727,4.65806-1.7744,3.06907-2.21665,13.44328-8.3856,12.16264-7.23242,15.28399-7.18188,16.18972-10.55423,1.80853-6.73404-7.84857-17.32007-14.24053-16.62308-1.68285,.18351-3.48511,1.1868-6.28828,.5065-.61587-.14946-3.31186-.80374-4.62616-3.03534-1.17245-1.99075-.17942-3.42682-.65095-5.05952-1.23768-4.28562-11.5548-6.42438-20.60012-4.91323-5.20249,.86916-9.24902,3.24201-17.12958,7.95224-13.71643,8.19828-20.57457,12.29743-22.11596,18.57778-1.46097,5.95263,2.04553,8.51755-.50467,14.88965-2.37459,5.9332-6.14608,5.53692-7.44391,10.33663-2.0885,7.72365,5.66305,16.2004,8.8921,19.73157,3.54025,3.87149,6.92605,5.9963,11.42094,8.81713,5.64188,3.54063,8.46275,5.31094,11.8543,5.13083,6.14905-.32656,12.26509-5.89907,12.50342-10.98759,.0893-1.907-.70623-2.47891-2.67513-9.03472-.82026-2.7313-1.38921-4.98609-1.73527-6.43274" fill="#2f2e41"/><polygon points="603.34679 457.83791 639.34679 502.83791 658.34679 474.83791 630.34679 448.83791 603.34679 457.83791" fill="#ffb6b6"/><path d="M455.34679,348.83791s110.67717,13,119.83858,22c9.16142,9,64.16142,85,64.16142,85l-23,18-59.30315-63.04688-126.41664-.9868,24.71979-60.96632Z" fill="#2f2e41"/><polygon points="515.34679 348.83791 551.34679 393.83791 570.34679 365.83791 542.34679 339.83791 515.34679 348.83791" fill="#ffb6b6"/><path d="M546.34679,380.83791s-8-2-8,5,2,28,2,28c0,0,92-16,92-26s-25-8-25-8l-36-17-25,18Z" fill="#2f2e41"/><polygon points="358.34679 578.83791 375.34679 641.83791 402.34679 636.83791 396.34679 571.83791 358.34679 578.83791" fill="#a0616a"/><path d="M379.34679,637.83791l-10,2-8,27s13,5,13,15,5,17,25,16,22,0,22-8-15-50-15-50c0,0,1-17-11-16s-16,14-16,14Z" fill="#2f2e41"/><polygon points="266.93087 577.85781 268.0909 643.10085 295.49604 644.82072 305.49207 580.31429 266.93087 577.85781" fill="#a0616a"/><path d="M272.94396,640.19434l-10.1861-.49329-14.32917,24.24201s11.39271,8.01287,8.95953,17.71234,.71332,17.70568,20.35556,21.60211c19.64225,3.89642,21.33882,5.35301,23.28537-2.40656,1.94655-7.75957-2.38327-52.1471-2.38327-52.1471,0,0,5.10636-16.24577-6.77631-18.19565-11.88268-1.94988-18.9256,9.68615-18.9256,9.68615Z" fill="#2f2e41"/><path d="M278.34679,187.83791l-54-4-12,15s-6,101-2,111,1,67,1,67l136.12992-9.5-30.12992-72.5,1-42-27-51-13-14Z" fill="#6c63ff"/><path d="M217.34679,355.83791s-22,32-14,49,62.26478,115.7078,62.26478,115.7078l-7,92,48-4,8-99-33.26478-80.7078,6-9,50,61,18,106,48-6-26-155-30.38601-59.74146-129.61399-10.25854Z" fill="#2f2e41"/><path d="M407.34679,184.83791l-40-4-33,32s-16,46-13,71,29,87,29,87l41-30,47,2v-93.61811l-24-52.38189-7-12Z" fill="#e6e6e6"/><path d="M399.584,196.82757s23.00192,2.98522,32.95344,20.10151,81.68818,97.65391,81.68818,97.65391l-13.59142,12.4362-70.68359-45.60516-27.13999-46.67991-3.22662-37.90655Z" fill="#e6e6e6"/><path d="M346.84679,360.33791s-3.5,41.5,18.5,47.5,79,1,79,1l36-93,35,42,34-16s-36-101-56-101-52,28-52,28l-52,70-42.5,21.5Z" fill="#2f2e41"/><path d="M634.34679,489.83791s-8-2-8,5,2,28,2,28c0,0,92-16,92-26s-25-8-25-8l-36-17-25,18Z" fill="#2f2e41"/><circle cx="212.64658" cy="108.05848" r="18.53961" fill="#2f2e41"/><circle cx="255.46144" cy="136.41455" r="40.37487" fill="#a0616a"/><path d="M242.65995,180.67826c-4.29117,2.27318-16.36578-6.07248-20.68605-17.25528-2.77931-7.19412-9.53647-5.99725-13.84833-14.96908-2.51243-5.22776,4.99016-10.34177,3.75271-14.86177-2.24218-8.18978,.56885-15.51705,.927-16.41471,3.09162-7.74871,7.64881-7.56845,11.32369-16.58759,2.21246-5.42996,.79313-6.06594,2.65283-8.84374,5.36717-8.0169,20.93994-8.3219,31.9233-4.53065,3.8007,1.31192,12.95579-5.71801,20.38748-.62527,8.75586,6.00018,14.58093,23.29571,13.24076,26.46497-.81422,1.92549-5.34747-.03619-14.77533,1.44563-8.72866,1.37191,2.79167,7.89339-7.03148,10.11649-11.6159,2.62881-15.11517,.22985-18.33429,3.90471-3.4029,3.88466-4.03206,11.74744-.927,16.41471,1.54084,2.3161,3.52769,3.1334,3.27877,4.74528-.45442,2.94274-3.06827,1.34309-3.92558,4.46509-.99718,3.63129,7.27682,8.39237,6.55754,9.49055-.14492,.22129-.76455,.46091-8.84374-2.65283-3.22601-1.2433-4.46986-2.31676-4.83171-1.91957-.58579,.64299-3.48653,7.09042-.19062,9.83295,5.12909,4.26791,1.57417,5.96279,3.91235,9.30466,2.41223,3.44765-1.83517,1.03079-4.56229,2.47544Z" fill="#2f2e41"/><g><path id="d-84" d="M252.11357,413.95831c6.44349,10.42282,17.04436,15.54671,23.67683,11.44494,6.63248-4.10176,6.78426-15.87435,.33709-26.30003-2.51826-4.19995-6.0057-7.73577-10.17059-10.3116l-27.85902-43.81714-20.28344,13.5117,29.61751,41.76142c.44316,4.87855,2.04848,9.57997,4.6816,13.7107Z" fill="#a0616a"/><path d="M215.34679,200.83791s-47,9-43,32,29.24852,116.72835,29.24852,116.72835l20.75148,23.27165,25-18-21-84-11-70Z" fill="#6c63ff"/></g><path id="e-85" d="M439.79363,417.67928c6.41687,10.43923,17.00463,15.59015,23.64755,11.50532,6.64292-4.08483,6.82475-15.85699,.4042-26.29908-2.50753-4.20637-5.98595-7.75107-10.14424-10.33751l-27.74712-43.88808-20.31785,13.4599,29.51086,41.83686c.43071,4.87966,2.02403,9.58517,4.6466,13.7226Z" fill="#ffb6b6"/><path d="M377.35692,206.84003l-39.57894,9.9251s13.85877,49.38445,17.10616,67.08837c3.24739,17.70392,71.59491,115.24681,71.59491,115.24681l20.67324-24.72928-60.53604-111.56436-9.25933-55.96664Z" fill="#e6e6e6"/></svg>
            </div>
            </div>
            <hr></hr>
            <svg id="visual" viewBox="0 0 3840 100" width="3840" height="100"><path d="M0 23L549 49L1097 20L1646 20L2194 44L2743 23L3291 45L3840 47L3840 101L3291 101L2743 101L2194 101L1646 101L1097 101L549 101L0 101Z" fill="#e6e6e6"></path><path d="M0 46L549 40L1097 43L1646 34L2194 32L2743 51L3291 35L3840 48L3840 101L3291 101L2743 101L2194 101L1646 101L1097 101L549 101L0 101Z" fill="#cfc4ee"></path><path d="M0 67L549 51L1097 52L1646 64L2194 50L2743 49L3291 61L3840 58L3840 101L3291 101L2743 101L2194 101L1646 101L1097 101L549 101L0 101Z" fill="#b4a3f4"></path><path d="M0 68L549 70L1097 71L1646 68L2194 73L2743 76L3291 78L3840 74L3840 101L3291 101L2743 101L2194 101L1646 101L1097 101L549 101L0 101Z" fill="#9583fa"></path><path d="M0 75L549 82L1097 80L1646 77L2194 79L2743 77L3291 79L3840 82L3840 101L3291 101L2743 101L2194 101L1646 101L1097 101L549 101L0 101Z" fill="#6c63ff"></path></svg>
            <Foundation/>
            <Contact/>
            </div>
            )
    }

}

export default Landing