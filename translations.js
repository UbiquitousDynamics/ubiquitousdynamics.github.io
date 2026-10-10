/* ========== TRANSLATIONS ========== */
const translations = {
    en: {
        home: 'Home',
        features: 'Features',
        impact: 'Impact',
        team: 'Team',
        contact: 'Contact',
        projects: 'Projects',
        
        hero_title: 'Build Tomorrow, Today',
        hero_subtitle: 'Revolutionary humanoid robotics engineered from sustainable materials. Decentralized innovation meeting cutting-edge technology to shape a solarpunk future.',
        explore_solutions: 'Explore Solutions',
        our_projects: 'Our Projects',
        
        sustainable_innovation: 'Sustainable Innovation',
        sustainable_desc: 'Utilizing discarded materials and circular design principles to create advanced robotics with minimal environmental impact.',
        decentralized_collab: 'Decentralized Collaboration',
        decentralized_desc: 'Open-source architecture and community-driven development enabling global participation in shaping our technological future.',
        solarpunk_vision: 'Solarpunk Vision',
        solarpunk_desc: 'Building optimistic, regenerative technology that harmonizes human progress with ecological responsibility.',
        
        why_choose: 'Why Choose Ubiquitous Dynamics',
        cutting_edge_tech: 'Cutting-edge technology meets ethical innovation',
        advanced_robotics: 'Advanced Robotics',
        advanced_robotics_desc: 'State-of-the-art humanoid robots with adaptive AI, real-time learning, and human-robot collaboration capabilities.',
        eco_materials: 'Eco-Materials',
        eco_materials_desc: 'Engineering excellence through repurposed components and biodegradable composites minimizing our carbon footprint.',
        distributed_network: 'Distributed Network',
        distributed_network_desc: 'Blockchain-verified supply chain and decentralized governance ensuring transparency and ethical production.',
        edge_ai: 'Edge AI',
        edge_ai_desc: 'Low-latency processing and privacy-first machine learning models operating independently without cloud dependence.',
        realtime_analytics: 'Real-Time Analytics',
        realtime_analytics_desc: 'Comprehensive telemetry and performance monitoring for optimal efficiency and predictive maintenance.',
        global_impact_feature: 'Global Impact',
        global_impact_desc: 'Technology accessible to communities worldwide, fostering inclusivity and addressing local resource challenges.',
        
        our_impact: 'Our Impact',
        metrics_that_matter: 'Metrics that matter in reshaping the future',
        active_collaborators: 'Active Collaborators Worldwide',
        groundbreaking_projects: 'Groundbreaking Projects',
        waste_repurposed: 'Kg of Waste Materials Repurposed',
        energy_reduction: 'Reduction in Energy Consumption',
        
        our_team: 'Our Team',
        visionary_engineers: 'Visionary engineers, designers, and innovators united by shared purpose',
        
        stay_in_loop: 'Stay in the Loop',
        subscribe_updates: 'Subscribe to receive updates on our latest breakthroughs and community initiatives',
        subscribe: 'Subscribe',
        
        get_in_touch: 'Let\'s Build Together',
        join_community: 'Join our global community of innovators, developers, and visionaries working to reshape the future through sustainable robotics and decentralized technology.',
        
        copyright: '© 2024 Ubiquitous Dynamics. All rights reserved.',
        building_future: 'Building sustainable robotics and decentralized innovation together.'
    },
    it: {
        home: 'Home',
        features: 'Caratteristiche',
        impact: 'Impatto',
        team: 'Team',
        contact: 'Contatti',
        projects: 'Progetti',
        
        hero_title: 'Costruisci il Domani, Oggi',
        hero_subtitle: 'Robotica umanoide rivoluzionaria realizzata con materiali sostenibili. Innovazione decentralizzata che incontra la tecnologia all\'avanguardia per plasmare un futuro solarpunk.',
        explore_solutions: 'Esplora le Soluzioni',
        our_projects: 'I Nostri Progetti',
        
        sustainable_innovation: 'Innovazione Sostenibile',
        sustainable_desc: 'Utilizziamo materiali scartati e principi di design circolare per creare robotica avanzata con un impatto ambientale minimo.',
        decentralized_collab: 'Collaborazione Decentralizzata',
        decentralized_desc: 'Architettura open-source e sviluppo guidato dalla comunità per consentire la partecipazione globale nel modellare il nostro futuro tecnologico.',
        solarpunk_vision: 'Visione Solarpunk',
        solarpunk_desc: 'Costruiamo tecnologie ottimistiche e rigenerative che armonizzano il progresso umano con la responsabilità ecologica.',
        
        why_choose: 'Perché Scegliere Ubiquitous Dynamics',
        cutting_edge_tech: 'La tecnologia all\'avanguardia incontra l\'innovazione etica',
        advanced_robotics: 'Robotica Avanzata',
        advanced_robotics_desc: 'Robot umanoidi all\'avanguardia con intelligenza artificiale adattativa, apprendimento in tempo reale e capacità di collaborazione uomo-macchina.',
        eco_materials: 'Materiali Eco-Friendly',
        eco_materials_desc: 'Eccellenza ingegneristica attraverso componenti riciclati e compositi biodegradabili che minimizzano la nostra impronta di carbonio.',
        distributed_network: 'Rete Distribuita',
        distributed_network_desc: 'Catena di approvvigionamento verificata da blockchain e governance decentralizzata che garantisce trasparenza e produzione etica.',
        edge_ai: 'Edge AI',
        edge_ai_desc: 'Elaborazione a bassa latenza e modelli di machine learning privacy-first che operano indipendentemente senza dipendenza dal cloud.',
        realtime_analytics: 'Analitiche in Tempo Reale',
        realtime_analytics_desc: 'Telemetria completa e monitoraggio delle prestazioni per efficienza ottimale e manutenzione predittiva.',
        global_impact_feature: 'Impatto Globale',
        global_impact_desc: 'Tecnologia accessibile a comunità in tutto il mondo, promuovendo inclusività e affrontando sfide locali di risorse.',
        
        our_impact: 'Il Nostro Impatto',
        metrics_that_matter: 'Metriche che contano nel rimodellare il futuro',
        active_collaborators: 'Collaboratori Attivi Globali',
        groundbreaking_projects: 'Progetti Rivoluzionari',
        waste_repurposed: 'Kg di Materiali di Scarto Riciclati',
        energy_reduction: 'Riduzione del Consumo Energetico',
        
        our_team: 'Il Nostro Team',
        visionary_engineers: 'Ingegneri visionari, designer e innovatori uniti da uno scopo comune',
        
        stay_in_loop: 'Rimani Informato',
        subscribe_updates: 'Iscriviti per ricevere aggiornamenti sui nostri ultimi progressi e iniziative comunitarie',
        subscribe: 'Iscriviti',
        
        get_in_touch: 'Costruiamo Insieme',
        join_community: 'Unisciti alla nostra comunità globale di innovatori, sviluppatori e visionari che lavorano per rimodellare il futuro attraverso robotica sostenibile e tecnologia decentralizzata.',
        
        copyright: '© 2024 Ubiquitous Dynamics. Tutti i diritti riservati.',
        building_future: 'Costruire robotica sostenibile e innovazione decentralizzata insieme.'
    }
};

/* ========== LANGUAGE & THEME MANAGER ========== */
const LanguageManager = {
    currentLang: localStorage.getItem('language') || 'en',
    
    init() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.apply();
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.apply();
        this.updateToggleButtons();
    },
    
    get(key) {
        return translations[this.currentLang][key] || translations.en[key] || key;
    },
    
    apply() {
        // Agggiorna tutti gli elementi con data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.get(key);
        });
    },
    
    updateToggleButtons() {
        const langBtn = document.querySelector('.lang-toggle');
        if (langBtn) {
            langBtn.textContent = this.currentLang === 'en' ? '🇮🇹 IT' : '🇬🇧 EN';
        }
    }
};

const ThemeManager = {
    currentTheme: localStorage.getItem('theme') || 'dark',
    
    init() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.apply();
    },
    
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        this.apply();
        this.updateToggleButtons();
    },
    
    apply() {
        const html = document.documentElement;
        if (this.currentTheme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    },
    
    updateToggleButtons() {
        const themeBtn = document.querySelector('.theme-toggle');
        if (themeBtn) {
            themeBtn.textContent = this.currentTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
        }
    }
};

// Inizializza quando document è pronto
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
    ThemeManager.init();
    setupControls();
});

function setupControls() {
    const langToggle = document.querySelector('.lang-toggle');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = LanguageManager.currentLang === 'en' ? 'it' : 'en';
            LanguageManager.setLanguage(newLang);
        });
        LanguageManager.updateToggleButtons();
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = ThemeManager.currentTheme === 'dark' ? 'light' : 'dark';
            ThemeManager.setTheme(newTheme);
        });
        ThemeManager.updateToggleButtons();
    }
}
