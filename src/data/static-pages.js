import React from "react";
import { Trans } from "@lingui/macro";

export default [
  {
    title: <Trans>Instituții publice</Trans>,
    slug: "institutii-publice",
    doc_type: "STATIC_PAGE",
    doc_id: 102,
    display_order: 2,
    active: true,
    firstNodeId: null,
    content: [
      {
        title: <Trans>Instituții publice</Trans>,
        display_order: 1,
        slug: "/",
        page: ``,
      },
    ],
    form: null,
    buttons: null,
    accordion: [
      {
        title: <Trans>Președintele României</Trans>,
        slug: "presedintele-romaniei",
        display_order: 1,
        content: () => (
          <Trans>
            <p>
              Președintele României, conform Constituției, veghează la
              respectarea Constituţiei şi la buna funcţionare a autorităţilor
              publice. Președintele este comandantul forțelor armate și
              îndeplinește funcția de președinte al Consiliului Suprem de
              Apărare a Țării. În conformitate cu art. 93 (1) din Constituția
              României, președintele României poate institui starea de asediu
              sau starea de urgență, în întreaga țară ori în unele localități,
              și solicită Parlamentului încuviințarea măsurii adoptate, în cel
              mult 5 zile de la luarea acesteia. Președintele, cu ajutorul CSAT,
              are un rol de coordonare și decizie în cadrul stării de urgență.
            </p>
            <p>
              Conform articolelor 86 și 87 din Constituția României,
              Președintele poate consulta Guvernul cu privire la probleme
              urgente și de importanță deosebită și poate lua parte la ședințele
              Guvernului în care se dezbat probleme de interes național, privind
              politica externă, apărarea țării și asigurarea ordinii publice,
              acesta prezindând ședințele Guvernului la care participă. Conform
              articolul 34 din Ordonanta de Urgenta nr. 1 din 21 ianuarie 1999
              privind regimul stării de asediu și regimul stării de urgență, în
              termen de 60 de zile de la încetarea stării de asediu sau a stării
              de urgență.
            </p>
            <p>
              Președintele României prezintă Parlamentului o informare asupra
              evenimentelor care au determinat instituirea acestora, acțiunile
              întreprinse și măsurile necesare prevenirii unor astfel de
              situații. Președintele a decretat starea de urgență prin Decretul
              nr.195/2020, publicat în Monitorul Oficial al României, Partea I,
              nr. 212 din 16 martie 2020, stare prelungită în data de 15 aprilie
              2020, pentru o perioadă de 30 de zile. De la declanșarea crizei
              până pe data de 9 mai 2020, Președintele a avut 22 ședințe de
              coordonare cu membri ai guvernului și 28 de declarații de presă pe
              subiect.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.presidency.ro/"
              >
                Președintele României
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Consiliul Suprem de Apărare al Țării (CSAT)</Trans>,
        slug: "csat",
        display_order: 2,
        content: () => (
          <Trans>
            <p>
              CSAT este autoritatea administrativă autonomă investită, potrivit
              Constituţiei, cu organizarea şi coordonarea unitară a
              activităţilor care privesc apărarea ţării şi siguranţa naţională.
              Președintele conduce Consiliul Suprem de Apărare al Țării, cu
              primul ministru pe post de vicepreședinte. Membrii Consiliului
              Suprem de Apărare a Ţării sunt: ministrul apărării naţionale,
              ministrul de interne, ministrul afacerilor externe, ministrul
              justiţiei, ministrul industriei şi resurselor, ministrul
              finanţelor publice, directorul Serviciului Român de Informaţii,
              directorul Serviciului de Informaţii Externe, şeful Statului Major
              General şi consilierul prezidential pentru securitate naţională.
            </p>
            <p>
              Activitatea Consiliului Suprem de Apărare a Ţării este supusă
              examinării şi verificării parlamentare. Conform Ordonanței de
              Urgență nr. 1 din 21 ianuarie 1999 privind regimul stării de
              asediu și regimul stării de urgență, CSAT are un rol decizional
              cheie în cadrul desfășurării stărilor de urgență și de război.
              Singura ședință a CSAT pe subiectul pandemiei Covid-19 a avut loc
              pe 26 februarie, înainte de apariția primului caz pe teritoriul
              țării.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://csat.presidency.ro/"
              >
                Consiliul Suprem de Apărare al Țării (CSAT)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Serviciul Român de Informații (SRI)</Trans>,
        slug: "sri",
        display_order: 3,
        content: () => (
          <Trans>
            <p>
              SRI este principalul serviciu de informaţii din România
              specializat în culegerea, analizarea şi valorificarea
              informaţiilor obţinute în interiorul ţării. Misiunea sa este de a
              cunoaşte, preveni şi contracara ameninţările la adresa securităţii
              naţionale, aşa cum sunt acestea definite de lege. SRI este parte
              componentă a sistemului naţional de apărare, ordine publică şi
              securitate naţională. Rolul Serviciului Român de Informaţii, aşa
              cum este definit de Legea 51/1991 privind securitatea naţională a
              României (republicată, cu modificările şi completările ulterioare)
              şi de Legea nr. 14/1992 privind organizarea şi funcţionarea
              Serviciului Român de Informaţii (cu modificările şi completările
              ulterioare), este de a contribui, împreună cu celelalte instituţii
              responsabile ale statului, la realizarea securităţii naţionale a
              României, prin înlăturarea ameninţărilor de natură a pune în
              pericol legalitatea, echilibrul şi stabilitatea economică, socială
              şi politică a ţării, precum şi drepturile, libertăţile şi
              îndatoririle fundamentale ale cetăţenilor. Directorul SRI face
              parte din CSAT și instituția participă în analiza riscurilor
              aferente pandemiei cât și celor tangențiale.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.sri.ro/"
              >
                Serviciul Român de Informații (SRI)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Serviciul de Telecomunicații Speciale (STS)</Trans>,
        slug: "sts",
        display_order: 4,
        content: () => (
          <Trans>
            <p>
              Serviciul De Telecomunicații Speciale este organul care
              coordonează transmisiunile și telecomunicațiile pentru
              autoritățile din România. Conform Legii 92/1996 privind
              organizarea și funcționarea STS, activitatea Serviciului de
              Telecomunicații Speciale este organizată și coordonată de către
              Consiliul Suprem de Apărare a Țării și controlată de Parlamentul
              României, prin comisiile pentru apărare, ordine publică și
              siguranță națională.
            </p>
            <p>
              Principalele atribuții ale STS privesc organizarea și coordonarea
              activității din domeniul telecomunicațiilor speciale între și
              pentru autoritățile publice din România, inclusiv în perioada
              stării de urgență. Potrivit Ordonanței de urgență nr.34/2008
              privind organizarea și funcționarea Sistemului Național Unic
              pentru Apeluri de Urgență (SNUAU) STS este administratorul SNUAU.
              Potrivit HG 557/2016, privind managementul tipurilor de risc, STS
              are un rol important în funcționarea rețelelor informatice pentru
              Sistemul Național de Management al Situațiilor de Urgență.{" "}
            </p>
            <p>
              STS a sprijinit autoritățiile publice implicate în dezvoltarea
              infrastructurii necesare de comunicații și a dezvoltat și
              operaționalizat, la solicitarea Ministerului Economiei, Energiei
              și Mediului de Afaceri, platforma https://csu.prevenire.gov.ro/
              prin intermediul căreia operatorii economici afectați de pandemia
              COVID-19 pot solicita Certificate de Situație de Urgență (CSU) Tip
              1 și Tip 2 pe perioada stării de urgență în România.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.sts.ro/"
              >
                Serviciul de Telecomunicații Speciale (STS)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Parlamentul României</Trans>,
        slug: "parlamentul-romaniei",
        display_order: 5,
        content: () => (
          <Trans>
            <p>
              Parlamentul României este, conform Constituției, organul
              reprezentativ suprem și unica autoritate legiuitoare a țării.
              Parlamentul funcționează și își exercită rolul pe întreaga
              perioadă a stării de urgență. Parlamentul trebuie să aprobe
              decretul Președintelui de instituire a stării de urgență, precum
              și decretele de prelungire a acesteia. Conform articolul 34 din
              Ordonanța de Urgență nr. 1 din 21 ianuarie 1999 privind regimul
              stării de asediu și regimul stării de urgență în termen de 60 de
              zile de la încetarea stării de asediu sau a stării de urgență,
              Președintele României prezintă Parlamentului o informare asupra
              evenimentelor care au determinat instituirea acestora, acțiunile
              întreprinse și măsurile necesare prevenirii unor astfel de
              situații.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.parlament.ro/"
              >
                Parlamentul României
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Guvernul României</Trans>,
        slug: "guvernul-romaniei",
        display_order: 6,
        content: () => (
          <Trans>
            <p>
              Guvernul României este principalul organ executiv al
              administrației centrale, asigurând conform Constituției conducerea
              generală a administrației publice. Sub conducerea
              Primului-ministru și a cancelariei sale, Guvernul, împărțit în
              ministere, ia decizii pentru aplicarea unui plan de guvernare
              stabilit de dinainte și votat de Parlament.
            </p>
            <p>
              Coordonarea Guvernului este asigurată prin ședințe de guvern la
              care participă toți miniștrii. Decretul de instituire a stării de
              urgență este contrasemnat de Primul-ministru, iar conform
              articolului 19 din Ordonanța de Urgență nr. 1 din 21 ianuarie 1999
              privind regimul stării de asediu și regimul stării de urgență,
              gestionarea măsurilor dispuse revine Sistemului Național de
              Management al Situațiilor de Urgență, sub conducerea nemijlocită a
              ministrului afacerilor interne și în coordonarea
              primului-ministru.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.gov.ro/"
              >
                Guvernul României
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Comitetul Național pentru Situații Speciale de Urgență (CNSSU)
          </Trans>
        ),
        slug: "cnssu",
        display_order: 7,
        content: () => (
          <Trans>
            <p>
              Comitetul Naţional pentru Situaţii Speciale de Urgenţă se
              constituie şi funcţionează, potrivit legii, ca organism
              interministerial, sub conducerea viceprim-ministrului pentru
              securitate naţională, în cadrul sistemului naţional de management
              al situaţiilor de urgenţă. Comitetul se compune din preşedinte:
              viceprim-ministru pentru securitate naţională, vicepreşedinte:
              ministrul afacerilor interne, membri: miniştri şi conducători ai
              instituţiilor publice centrale.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cnssu.ro/"
              >
                Comitetul Național pentru Situații Speciale de Urgență (CNSSU)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Grupul de Comunicare Strategică (GCS)</Trans>,
        slug: "gcs",
        display_order: 8,
        content: () => (
          <Trans>
            <p>
              Grupul de comunicare strategică a fost înființat prin Hotărârea
              nr. 2/24.02.2020 a Comitetului Național pentru Situații Speciale
              de Urgență, și este compus din specialiști în comunicare de la
              toate ministerele și serviciile publice cu responsabilități în
              combaterea pandemiei: Guvernul României, Ministerul Afacerilor
              Interne, Ministerul Sănătății, Ministerul Apărării Naționale,
              Ministerul Afacerilor Externe, Ministerul Transporturilor,
              Departamentul pentru Situații de Urgență, Inspectoratul General
              pentru Situații de Urgență, Inspectoratul General al Poliției
              Române, Inspectoratul General al Jandarmeriei Române,
              Inspectoratul General al Poliției de Frontieră și Serviciul de
              Telecomunicații Speciale.
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Afacerilor Interne (MAI)</Trans>,
        slug: "mai",
        display_order: 9,
        content: () => (
          <Trans>
            <p>
              Conform articolului 18 din Ordonanța de Urgență nr. 1 din 21
              ianuarie 1999 privind regimul stării de asediu și regimul stării
              de urgență, coordonarea aplicării măsurilor dispuse prin decretul
              de instituire a stării de urgență revine Ministerului
              Administrației și Internelor. După decretarea stării de urgență
              Ministrul de Interne devine managerul direct al situației de
              urgență, sub coordonarea Primului-ministru. Ordonanțele Militare
              emise de Ministrul de Interne sunt obligatorii pe durata stării de
              urgență. Printre structurile din subordinea MAI amintim Poliția
              Română. De asemenea pe perioada stării de urgență Poliția
              Comunitară poate fi militarizată, în totalitate sau numai în
              anumite unități administrativ-teritoriale, desfășurându-și
              activitatea în subordinea Ministerului Afacerilor Interne.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mai.gov.ro/"
              >
                Ministerul Afacerilor Interne (MAI)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Departamentul pentru Situații de Urgență (DSU)</Trans>,
        slug: "dsu",
        display_order: 10,
        content: () => (
          <Trans>
            <p>
              Departamentul pentru Situații de Urgență este structura
              operațională a Ministerului Afacerilor Interne cu rol de
              coordonare, cu caracter permanent, la nivel național, a
              activităților de prevenire și gestionare a situațiilor de urgenţă,
              asigurarea şi coordonarea resurselor umane, materiale, financiare
              și de altă natură necesare restabilirii stării de normalitate,
              inclusiv primul ajutor calificat și asistența medicală de urgenţă
              în cadrul unităților şi compartimentelor de primire a urgențelor.
            </p>
            <p>
              Departamentul asigură secretariatul tehnic pentru Comisia
              Interministerială pentru Suport Tehnic (CIMST) care se organizează
              și funcționează ca organism interministerial, în scopul
              coordonării activităților privind organizarea, funcționarea și
              finanțarea sistemului național de asistență medicală de urgență și
              de prim ajutor calificat, precum și a serviciilor profesionale
              pentru situații de urgență. Departamentul pentru Situaţii de
              Urgenţă, prin Inspectoratul General pentru Situaţii de Urgenţă,
              asigură secretariatul tehnic permanent al Comitetului Naţional
              pentru Situații Speciale de Urgență. De asemenea, coordnatorul DSU
              este și liderul grupului de suport tehnico-științific privind
              gestionarea bolilor înalt contagioase pe teritoriul României.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.dsu.mai.gov.ro/"
              >
                Departamentul pentru Situații de Urgență (DSU)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>Inspectoratul General pentru Situații de Urgență (IGSU)</Trans>
        ),
        slug: "igsu",
        display_order: 11,
        content: () => (
          <Trans>
            <p>
              Inspectoratul General pentru Situații de Urgență este o structură
              publică subordonată Ministerului Afacerilor Interne care asigura
              coordonarea unitară şi permanentă a activităţilor de prevenire şi
              gestionare a situaţiilor de urgenţă. Conform Ordonanței de Urgență
              21/2004, gestionarea operaţională a situaţiilor de urgenţă la
              nivel naţional se realizează prin Centrul naţional de coordonare
              şi conducere a intervenţiei, constituit la nivelul Inspectoratului
              General pentru Situaţii de Urgenţă, care asigură permanent fluxul
              informaţional pentru Centrul operaţional de comandă al Guvernului.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.igsu.ro/"
              >
                Inspectoratul General pentru Situații de Urgență (IGSU)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Grupul de suport tehnico-stiințific privind gestionarea bolilor
            înalt contagioase pe teritoriul României
          </Trans>
        ),
        slug: "gtsscbic",
        display_order: 12,
        content: () => (
          <Trans>
            <p>
              Grupul de suport tehnico-stiințific privind gestionarea bolilor
              înalt contagioase pe teritoriul României este un organism
              constituit în cadrul Comitetului Național pentru Situații Speciale
              de Urgență și are ca rol analizarea situației în caz de epidemie
              și elaborarea de propuneri de măsuri și hotărâri menite să
              oprească răspândirea virusurilor. Grupul de suport este format din
              specialiști, cercetători, cadre didactice și alți experți în
              special din domeniul medical, epidemiologic și boli infecțioase.
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Sistemul Național de Management al Situațiilor de Urgență
          </Trans>
        ),
        slug: "snmsu",
        display_order: 13,
        content: () => (
          <Trans>
            <p>
              Sistemul Național de Management al Situațiilor de Urgență se
              organizează şi funcţionează pentru prevenirea şi gestionarea
              situaţiilor de urgenţă, asigurarea şi coordonarea resurselor
              umane, materiale, financiare şi de altă natură necesare
              restabilirii stării de normalitate. Acesta este organizat de
              autorităţile administraţiei publice şi se compune dintr-o reţea de
              organisme, organe şi structuri abilitate în managementul
              situaţiilor de urgenţă, cu rol decizional, de intervenție sau
              operațional.
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Centrul Național de Conducere și Coordonare a Intervenției (CNCCI)
          </Trans>
        ),
        slug: "cncci",
        display_order: 14,
        content: () => (
          <Trans>
            <p>
              CNCCI este condus de secretarul de stat, şef al Departamentului
              pentru Situaţii de Urgenţă, din cadrul Ministerului Afacerilor
              Interne. În lipsa şefului DSU, conducerea CNCCI este asigurată de
              inspectorul general al Inspectoratului General pentru Situaţii de
              Urgenţă sau de persoana desemnată de acesta. Activitatea CNCCI are
              caracter permanent şi se asigură în stare de normalitate cu
              personal din cadrul Centrului Operaţional Naţional al IGSU şi din
              cadrul Serviciului Monitorizare şi Coordonare al Direcţiei
              Generale pentru Monitorizarea, Controlul Operaţional şi Inspecţia
              Activităţii Serviciilor de Ambulanţă şi UPU/CPU din DSU.
            </p>
            <p>
              Centrele de coordonare şi conducere a intervenţiei se înfiinţează
              şi organizează la nivel naţional şi teritorial, potrivit legii, ca
              structuri interinstituţionale de suport decizional pentru
              Comitetul Naţional pentru Intemperii şi Calamităţi şi comitetele
              judeţene/al municipiului Bucureşti pentru situaţii de urgenţă, în
              vederea gestionării operaţionale a situaţiilor de urgenţă care se
              produc sau au efect pe teritoriul naţional.
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Inspectoratul General al Poliției de Frontieră</Trans>,
        slug: "igpf",
        display_order: 15,
        content: () => (
          <Trans>
            <p>
              Printre atribuțiile Inspectoratului General al Poliției de
              Frontieră se numără păzirea și apărarea zonelor de frontieră ale
              țării, ale punctelor de trecere respectiv al controlului
              persoanelor care intră sau ies din țară. În cadrul crizei
              epidemiologice, Poliția de Frontieră asistă și coordonează
              împreună cu alte instituții punctele de control și testare
              epidemiologică, și după caz carantină.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.politiadefrontiera.ro/"
              >
                Inspectoratul General al Poliției de Frontieră
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Sănătății</Trans>,
        slug: "ministerul-sanatatii",
        display_order: 16,
        content: () => (
          <Trans>
            <p>
              Ministerul Sănătății reprezintă autoritatea centrală în domeniul
              asistenței de sănătate publică și, printre altele, coordonează
              rețeaua logistică, materială și umană abilitată pentru situații de
              risc biologic, epidemie, sau orice altă situație de criză care
              necesită intervenție medicală. Ministerul prin Institutul Național
              de Sănătate Publică asigură normele și protocoalele de tratare ale
              pacienților în cazul epidemiei. La nivel local, Direcțiile de
              Sănătate Publică sunt instituțiile cu rol de coordonare și
              monitorizare a sănătății populației.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.ms.ro/"
              >
                Ministerul Sănătății
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Institutul Național pentru Sănătate Publică prin Centrul Național de
            Supraveghere și Control al Bolilor Transmisibile (CNSCBT)
          </Trans>
        ),
        slug: "cnscbt",
        display_order: 17,
        content: () => (
          <Trans>
            <p>
              Este organismul specific de control și studiere al bolilor
              transmisibile care reprezintă o amenințare pentru sănătatea
              publică. Colaborează cu celelalte instituții implicate în efortul
              de salvare național și internațional prin oferirea de informații
              științifice specifice de stopare a epidemiei. Acesta determină
              procedurile aplicabile în rândul efortului de salvare, dar și al
              populației pentru a opri răspândirea virusului. Sunt cei care
              determină procedurile epidemiologice aplicabile în această
              situație.
            </p>
            <p>
              De asemenea, determină condițiile biologice necesare carantinei și
              necesitatea auto carantinei. Acesta, prin Direcțiile de Sănătate
              Publică, desfășoară anchete epidemiologice pentru identificarea
              tuturor contacților persoanelor confirmate pozitiv și
              monitorizează răspândirea îmbolnăvirilor.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cnscbt.ro/"
              >
                Institutul Național pentru Sănătate Publică prin Centrul
                Național de Supraveghere și Control al Bolilor Transmisibile
                (CNSCBT)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Direcțiile de Sănătate Publică (DSP)</Trans>,
        slug: "dsp",
        display_order: 18,
        content: () => (
          <Trans>
            <p>
              Direcțiile de Sănătate Publică Județene, respectiv Direcția de
              Sănătate Publică a Municipiului București, sunt instituții publice
              ce au ca obiective realizarea politicilor și programelor naționale
              de sănatate publică, a activității de medicină preventivă și a
              inspecției sanitare de stat, a monitorizarii stării de sănatate și
              a organizării statisticii de sănatate, precum și a planificării și
              derulării investițiilor finanțate de la bugetul de stat pentru
              sectorul de sănatate. În cadrul epidemiei de coronavirus
              direcțiile de sănătate publică au un rol în gestionarea și
              monitorizarea cazurilor suspecte de COVID-19 și în sfătuirea
              populației cu privire la măsurile ce trebuiesc luate pentru
              prevenție.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.ms.ro/directiile-de-sanatate-publica-judetene-respectiv-a-municipiului-bucuresti-servicii-publice-deconcentrate/"
              >
                Direcțiile de Sănătate Publică Județene, respectiv Direcția de
                Sănătate Publică a Municipiului București
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Apărării Naționale (MApN)</Trans>,
        slug: "mapn",
        display_order: 19,
        content: () => (
          <Trans>
            <p>
              Ministerul Apărării Naționale este organul de specialitate al
              administrației centrale care se ocupă cu conducerea activității în
              domeniul apărării naționale. Prin cadrul Forțelor Armate Române,
              aflate în subordinea Statului Major al Apărării, la rândul său
              subordonat Ministerului, MApN vine în suportul MAI și în special
              al DSU în cadrul răspunsului coordonat la epidemia de COVID-19
              prin implicarea militarilor și a mijloacelor tehnice ale Armatei.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mapn.ro/"
              >
                Ministerul Apărării Naționale (MApN)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Forțele Armate Române</Trans>,
        slug: "fortele-armate-romane",
        display_order: 20,
        content: () => (
          <Trans>
            <p>
              Forțele Armate Române sunt principala instituție de apărare a
              țării. În cazul răspunsului centralizat la epidemia de COVID-19
              din România rolul principal al Forțelor Armate, sub coordonarea
              MApN este acela de suplimentare a efortului de combatere a crizei
              epidemiologice prin efective medicale militare și prin
              suplimentarea forțelor de ordine publică. Printre activități se
              remarcă detașarea medicilor din cadrul instituției la centrele de
              control și triaj, cum ar fi cele de trecere de frontieră precum și
              asigurarea conducerii și coordonării personalului în cazul unor
              instituții medicale din țară ce nu au putut face față epidemiei.
              Forțele Armate ajută, de asemenea, la asigurarea suportului
              logistic, prin corturi, spitale mobile sau prin facilitarea
              transportului și distribuției de materiale medicale și de
              protecție. Dincolo de aceasta, armata poate interveni pentru
              suplimentarea personalului de specialitate (medical sau de ordine
              publică), la cerere.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.roaf.ro/"
              >
                Fortele Aeriene Române
              </a>
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.forter.ro/"
              >
                Fortele Terestre Române
              </a>
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.navy.ro/"
              >
                Fortele Navale Române
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Muncii și Protecției Sociale (MMPS)</Trans>,
        slug: "mmps",
        display_order: 21,
        content: () => (
          <Trans>
            <p>
              Ministerul Muncii şi Protecţiei Sociale se organizează şi
              funcţionează ca organ de specialitate al administraţiei publice
              centrale, cu personalitate juridică, în subordinea Guvernului.
              Ministerul Muncii şi Protecţiei Sociale realizează politicile
              naţionale, corelate cu cele la nivel european şi internaţional, în
              domeniul muncii, familiei, protecţiei sociale şi persoanelor
              vârstnice, îndeplinind rolul de autoritate de stat, strategie şi
              planificare, reglementare, sinteză, coordonare, monitorizare,
              inspecţie şi control.
            </p>
            <p>
              Ministerul Muncii şi Protecţiei Sociale asigură coordonarea
              aplicării strategiei şi politicilor Guvernului în domeniile
              muncii, familiei, protecţiei sociale şi persoanelor vârstnice.
              Ministerul Muncii și Protecției Sociale are un rol specific în
              cadrul epidemiei de coronavirus, acela de gestionare a impactului
              restricțiilor asupra forței de muncă și a mediului de afaceri. Din
              cauza noilor reguli, pe durata epidemiei, un număr foarte mare de
              persoane au intrat în șomaj sau șomaj tehnic.
            </p>
            <p>
              Rolul Ministerului Muncii este de a micșora impactul social și
              economic la măsurilor impuse pentru minimizarea răspândirii bolii
              prin o serie de instrumente specifice, precum susținerea parțială
              a șomajului tehnic. Ministerul are de asemenea un rol important
              continuat în protecție socială a grupurilor vulnerabile pe
              perioada epidemiei.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.mmuncii.ro/"
              >
                Ministerul Muncii și Protecției Sociale (MMPS)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Finanțelor Publice (MFP)</Trans>,
        slug: "mfp",
        display_order: 22,
        content: () => (
          <Trans>
            <p>
              Ministerul Finanțelor Publice are rol de constituire și gestionare
              generală a resurselor financiare publice având ca scop asigurarea
              echilibrului bugetar și aplicarea politicii financiare a statului.
              În condițiile afectării negative a finanțelor publice în contextul
              pandemiei, Ministerul are rolul de a monitoriza situația
              resurselor financiare ale statului, de a adapta strategia fiscală
              a României noului context și de a adopta măsuri de sprijin.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mfinante.gov.ro/"
              >
                Ministerul Finanțelor Publice (MFP)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Ministerul Economiei, Energiei și Mediului de Afaceri (MEEC)
          </Trans>
        ),
        slug: "meec",
        display_order: 23,
        content: () => (
          <Trans>
            <p>
              Pe lângă rolul său curent de gestionare a resurselor și stimulare
              a mediului de afaceri, MEEC gestionează ca parte a răspunsului
              coordonat la epidemia de COVID-19 o serie de măsuri ce vin în
              ajutorul sectorului privat. Astfel companiile afectate
              semnificativ de răspunsul coordonat la epidemie pot obține, pe
              perioada stării de urgență un Certificat de Urgență. Certificatele
              se utilizează în relațiile cu instituțiile publice pentru
              obținerea de facilități/ măsuri de sprijin ori în relațiile
              comerciale, în condițiile legii.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.economie.gov.ro/"
              >
                Ministerul Economiei, Energiei și Mediului de Afaceri (MEEC)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Grupul de Lucru Interinstituțional pentru evaluarea impactului
            economic, financiar și bugetar asupra României, generat de efectele
            epidemiei COVID-19 (GLI-ECOROM)
          </Trans>
        ),
        slug: "gli-ecorom",
        display_order: 24,
        content: () => (
          <Trans>
            <p>
              Grupul de Lucru Interinstituțional pentru evaluarea impactului
              economic, financiar și bugetar asupra României, generat de
              efectele epidemiei COVID-19 (GLI-ECOROM) este un grup de lucru
              coordonat de Cancelaria Primului-ministru și de Administrația
              prezidențială, prin Departamentul de Politici Economice și
              Sociale. Grupul are în componență reprezentanți din Ministerul
              Finanțelor Publice, Ministerul Economiei, ministerul
              Transporturilor, Ministerul Muncii, Ministerul Sănătății și
              Ministerul Afacerilor Externe.
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Ministerul Transporturilor, Infrastructurii și Comunicațiilor (MTIC)
          </Trans>
        ),
        slug: "mtic",
        display_order: 25,
        content: () => (
          <Trans>
            <p>
              Ministerul Transporturilor, Infrastructurii și Comunicațiilor este
              autoritatea publică centrală responsabilă cu implementarea
              politicilor de transport și infrastructură de transport, a celor
              referitoare la infrastructura de comunicații electronice și
              servicii poștale, adoptate la nivelul Uniunii Europene și al
              organismelor internaționale. Asigură managementul situațiilor de
              urgență în domeniul său de competență, în conformitate cu
              prevederile legale.
            </p>
            <p>
              Pe durata stării de urgență, Ministerul Transporturilor,
              Infrastructurii și Comunicațiilor ia măsuri speciale pentru a
              asigura buna desfășurare a transporturilor speciale dar și tipice.
              Miscarea, mai ales a mărfurilor, dar și regulile de transport
              pentru cetățeni reprezintă două aspecte cheie pentru buna
              funcționare atât a aparatului de stat, de intervenție, dar și
              pentru desfășurarea vieții de zi cu zi în condiții căt mai
              apropiate de normal.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.mt.gov.ro/"
              >
                Ministerul Transporturilor, Infrastructurii și Comunicațiilor
                (MTIC)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Educației și Cercetării (MEC)</Trans>,
        slug: "mec",
        display_order: 26,
        content: () => (
          <Trans>
            <p>
              Ministerul Educației și Cercetării coordonează și administrează
              sistemul de învățământ din România. Ministerul este responsabil
              pentru starea de sănătatea a elevilor și studenților din unitățile
              de învățământ din subordinea sa. Drept urmare acesta poate, prin
              ordin de ministru, dispune măsuri speciale precum închiderea
              școlilor pentru a limita rata de expunere a populației în caz de
              epidemie.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.edu.ro/"
              >
                Ministerul Educației și Cercetării (MEC)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Ministerul Afacerilor Externe (MAE)</Trans>,
        slug: "mae",
        display_order: 27,
        content: () => (
          <Trans>
            <p>
              Ministerul Afacerilor Externe asigură realizarea politicii externe
              a statului român în concordanţă cu interesele naţionale şi cu
              statutul României de membru în structurile europene şi
              euroatlantice și colaborează la elaborarea, fundamentarea şi
              realizarea politicii economice a României, în conformitate cu
              reglementările legale în vigoare şi cu programul de guvernare.
              Ministerul Afacerilor Externe are o serie de atribuții specifice
              în cazul unor epidemii precum emiterea de avertizări de călătorie,
              oferirea de asistență cetățenilor români aflați în situații
              speciale în străinătate prin structurile sale locale (ambasade și
              consulate) și coordonarea repartrierii cetățenilor români aflați
              în tranzit, decedați în străinătate sau aflați în situații
              dificile. Împreună cu Departamentul pentru Românii de
              Pretutindeni, MAE oferă un număr unic de telefon pentru informare
              cu privire la COVID-19.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mae.ro/"
              >
                Ministerul Afacerilor Externe (MAE)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>Departamentul pentru Românii de Pretutindeni (DRP)</Trans>
        ),
        slug: "drp",
        display_order: 28,
        content: () => (
          <Trans>
            <p>
              DRP este un organism al administrației centrale ce funcționează în
              subordinea Secretariatului General al Guvernului în temeiul HG
              137/2020. Rolul său este de elaborare și implementare a
              politicilor statului român în domeniul relațiilor cu românii de
              pretutindeni. Pe perioada pandemiei de coronavirus, Departamentul
              pentru Români de Pretutindeni a colaborat cu MAE pentru a oferi
              ajutor la repatriere românilor aflați în dificultate din cauza
              măsurilor luate de alte state.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.dprp.gov.ro/"
              >
                Departamentul pentru Românii de Pretutindeni (DRP)
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Autoritatea pentru Digitalizarea României</Trans>,
        slug: "adr",
        display_order: 29,
        content: () => (
          <Trans>
            <p>
              Autoritatea pentru Digitalizarea Romaniei (A.D.R.), se organizează
              și funcționează ca structură cu personalitate juridică în cadrul
              aparatului de lucru al Guvernului și în coordonarea primului
              ministru, având ca rol realizarea și coordonarea implementării
              strategiilor și a politicilor publice în domeniul transformării
              digitale și societății informaționale. În contextul crizei
              epidemiologice, ADR a avut printre altele un rol activ în
              dezvoltarea infrastructurii digitale necesare acestei perioade.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.adr.gov.ro/"
              >
                Autoritatea pentru Digitalizarea României
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>Instituția Prefectului</Trans>,
        slug: "institutia-prefectului",
        display_order: 30,
        content: () => (
          <Trans>
            <p>
              Prefectul este reprezentantul Guvernului în teritoriu și se ocupă
              cu aplicarea legilor și ordonanțelor emise de către conducerea
              centrală. În cazul unei situații de urgență acesta capătă anumite
              puteri sporite, ca urmare a puterilor sporite ale Ministrului
              Afacerilor Interne. În cazul declarării stării de urgență la
              nivelul fiecărui județ se activează Comitetul Județean pentru
              Situații de Urgență. Acesta se află în subordinea directă a
              prefectului și are ca rol sprijinirea acțiunilor ce se impun în
              situațiile de urgență.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.prefectura.mai.gov.ro/"
              >
                Instituția Prefectului
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: <Trans>DGASPC-uri și Primării</Trans>,
        slug: "dgaspc-primarii",
        display_order: 31,
        content: () => (
          <Trans>
            <p>
              Primăriile și Direcțiile Generale de Asistență Socială și
              Protecția Copilului, asigură pe cât posibil, buna funcționare a
              serviciilor sociale mai ales pentru grupurile vulnerabile. Printre
              acestea se numără, în contextul epidemiologic actual, măsuri de
              livrare la domiciliu a pachetelor pentru beneficiarii cantinelor
              sociale și suplimentarea numărului de locuri din adăposturi pentru
              persoanele fără adăpost.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://anpd.gov.ro/web/informatii-utile/directiile-generale-de-asistenta-sociala-si-protectia-copilului/"
              >
                Direcțiile Generale de Asistență Socială și Protecția Copilului
              </a>
            </p>
          </Trans>
        ),
      },
      {
        title: (
          <Trans>
            Autoritatea Națională pentru Drepturile Persoanelor cu Dizabilități,
            Copii și Adoptii (ANDPDCA)
          </Trans>
        ),
        slug: "andpdca",
        display_order: 32,
        content: () => (
          <Trans>
            <p>
              Autoritatea Națională pentru Drepturile Persoanelor cu
              Dizabilități, Copii și Adopții este organul de specialitate al
              administrației publice centrale, cu personalitate juridică, în
              subordinea Ministerului Muncii și Protecției Sociale, constituită
              prin preluarea activităților, atribuțiilor și structurilor
              Autorității Naționale pentru Persoanele cu Dizabilități și ale
              Autorității Naționale pentru Protecția Drepturilor Copilului și
              Adopție, care s-a desființat. Rolul ANDPDCA, în timpul pandemiei,
              este de a furniza informație metodologică și consiliere pentru
              actorii care sunt implicați în bunăstarea copiilor și persoanelor
              cu dizabilități. ANDPDCA colaborează strâns cu DGASPC-urile.
            </p>
            <p>
              Site oficial:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://andpdca.gov.ro/"
              >
                Autoritatea Națională pentru Drepturile Persoanelor cu
                Dizabilități, Copii și Adoptii (ANDPDCA)
              </a>
            </p>
          </Trans>
        ),
      },
    ],
  },
];
