var lista_sintomas = [
    {//Agressão
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia exaguinate",
            "Choque"
        ],
        "laranja": [
            "Mecanismo de trauma significativo",
            "Dispnéia aguda",
            "Hemorragia maior incontrolável",
            "Alteração súbita da consciência",
            "Déficit neurológico agudo",
            "Dor Intensa"
        ],
        "amarelo": [
            "Hemorragia menor incontrolável",
            "História de inconsciência",
            "Déficit neurológico novo",
            "Distúrbio de coagulação",
            "História discordante",
            "Dor moderada"
        ],
        "verde": [
            "Edema",
            "Deformidade",
            "Dor leve recente",
            "Evento recente"
        ]
    },
    {//Alergia
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Edema Facial",
            "Edema de Língua",
            "História Alérgica Importante",
            "Frases Entrecortadas",
            "Pulso Anormal",
            "Alteração Súbita de Consciência",
            "Saturação de O2 Muito Baixa",
            "Dor ou Coceira Intensas"
        ],
        "amarelo": [
            "Sat O2 Baixa",
            "Erupção ou Vesículas Dissemidas",
            "Dor ou Coceira Moderadas"
        ],
        "verde": [
            "Inflamação Local",
            "Dor ou Coceira Leves Recentes",
            "Evento Recente"
        ]
    },
    {//Alteração do Comportamento
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Hipoglicemia"
        ],
        "laranja": [
            "Alteração súbita da consciência",
            "Déficit neurológico agudo",
            "História Overdose ou Envenenamento",
            "Alto risco de agredir outros",
            "Alto risco de autoagressão"
        ],
        "amarelo": [
            "História de Trauma Craniocefálico",
            "História de Incosciência",
            "Déficit Neurológico Novo",
            "História Psiquiátrica Importante",
            "Risco Moderado de Agredir Outros",
            "Risco Moderado de Autoagressão",
        ],
        "verde": [
        ]
    },
    {//Asma
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Frases Entrecortadas",
            "História Respiratória Significativa",
            "Pulso anormal",
            "Sat O2 Muito Baixa",
            "Alteração Súbita da Consciência",
            "PFE Muito Baixo"
        ],
        "amarelo": [
            "Sat O2 Baixa",
            "Sem melhora com sua medicação habitual",
            "PFE Baixo"
        ],
        "verde": [
            "Chiera",
            "Tosse produtiva",
            "Evento Recente"
        ]
    },
    {//Autoagressão
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia exaguinante",
            "Choque",
        ],
        "laranja": [
            "Dispnéia Aguda",
            "Hemorragia maior incontrolável",
            "Alteração Súbita da Consciência",
            "Mecanismo de trauma significativo",
            "Alto risco de nova autoagressão",
            "Dor Intensa"
        ],
        "amarelo": [
            "Hemorragia menor incontrolável",
            "Risco moderado de nova autoagressão",
            "História Psiquiátrica Importante",
            "História Discordante",
            "Distúrbio de Coagulação",
            "Agitação Psicomotora",
            "Dor moderada"
        ],
        "verde": [
        ]
    },
    {//Bebê Chorando
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Sinais de Dor Intensa",
            "Resposta à Voz ou à Dor Apenas",
            "Prostanção, Hipotonia",
            "Púrpura",
            "Erupção Cutânea Fixa",
            "Criança Quente"
        ],
        "amarelo": [
            "Sinais de Dor Moderada",
            "História de Incosciência",
            "História Discordantes",
            "Inconsolável Pelos Pais",
            "Choro Prolongado ou Ininterrupto",
            "Incapaz de se Alimentar"
        ],
        "verde": [
            "Sinais de Dor Leve Recente",
            "Febril",
            "Comportamento Atípico",
            "Evento Recente"
        ]
    },
    {//Cefaléia
        "vermelho": [
            " Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa",
            "Convulsionando"
        ],
        "laranja": [
            "Início Abrupto",
            "Alteração Súbita da Consciência",
            "Déficit Neurológico Agudo",
            "Perda Total da Visão Aguda",
            "Sinais de Meningismo",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Criança Quente",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "História de Trauma Craniocefálico",
            "História de Inconsciência",
            "Distúrbio de Coagulação",
            "História Discordante",
            "Redução Recente da Acuidade Visual",
            "Vômitos Persistentes",
            "Déficit Neurológico Novo",
            "Couro Cabeludo Temporal Dolorido",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Vômitos",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Convulsões
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa",
            "Covulsionando",
            "Hipoglicemia"
        ],
        "laranja": [
            "Alteração Súbita da Consciência",
            "Déficit Neurológico Agudo",
            "Sinais de Meningismo",
            "História Overdose ou Envenenamento",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Criança Quente",
            "Adulto Muito Quente"
        ],
        "amarelo": [
            "História de Trauma Cranioencefálico",
            "História Discordante",
            "Déficit Neurológico Novo",
            "Adulto Quente",
            "História de Consulsão"
        ],
        "verde": [
            "Febril",
            "Cefaléia",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Corpo Estranho
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Estribidor",
            "Respiração Inadequada",
            "Hemorragia exaguinea",
            "Choque"
        ],
        "laranja": [
            "Hemorragia Maior Incontrolável",
            "Mecanismo de Trauma Significativo",
            "Alteração Súbita da Consciência",
            "Trauma ocular penetrante",
            "Dor Intensa"
        ],
        "amarelo": [
            "História Discordante",
            "Hemorragia Menor Incontrolável",
            "Déficit Neurológico Novo",
            "Dor Moderada"
        ],
        "verde": [
            "Inflamação Local",
            "Infecção Local",
            "Olho vermelho",
            "Dor Leve Recente",
            "Evento Recente"
        ],
        "azul": [
        ]
    },
    {//Criança Irritadiça
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Hipoglicemia",
            "Não reativa"
        ],
        "laranja": [
            "Sinais de Dor Intensa",
            "Resposta à Voz ou à Dor Apenas",
            "História de Overdose ou Envenenamento",
            "Sinais de Meningismo",
            "Erupção Cutânra Fixa",
            "Púrpura",
            "Criança Quente",
        ],
        "amarelo": [
            "Sinais de Dor Moderada",
            "Não entretível",
            "Não se alimenta",
            "História Discordante",
            "Choro Prolongado ou Ininterrupto"
        ],
        "verde": [
            "Sinais de Dor Leve Recente",
            "Febril",
            "Comportamento Atípico",
            "Evento Recente"
        ],
        "azul": [
        ]
    },
    {//Criança Mancando
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Sinais de Dor Intensa",
            "Comprometimento vascular distal",
            "Erupção Cutânra Fixa",
            "Púrpura",
            "Criança Quente",
        ],
        "amarelo": [
            "Sinais de Dor Moderada",
            "Dor ao movimento articular",
            "História Discordante",
            "Distúrbio de Coagulação",
            "Articulação quente"
        ],
        "verde": [
            "Sinais de Dor Leve Recente",
            "Febril",
            "deformidade",
            "Inchaço",
            "Evento Recente"
        ],
        "azul": [
        ]
    },
    {//Desmaio no Adulto
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Hipoglicemia",
            "Convulsionando"
        ],
        "laranja": [
            "Dor Precordial ou Cardiaca",
            "História de Alergia Importante",
            "Dispnéia Aguda",
            "Pulso Anormal",
            "Alteração Súbita da Consciência",
            "Déficit Neurológico Agudo",
            "Púrpura",
            "Erupção Cutânra Fixa",
            "Adulto Muito Quente",
            "Hipotermia",
            "Dor Intensa"
        ],
        "amarelo": [
            "História de Trauma Cranioencefálico",
            "História de Inconsciência",
            "História Discordante",
            "Déficit Neurológico Novo",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Dor Leve Recente",
            "Evento Recente"
        ],
        "azul": [
        ]
    },
    {//Diabetes
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa",
            "Hipoglicemia"
        ],
        "laranja": [
            "Alteração Súbita da Consciência",
            "Hiperglicemia com Cetose",
            "Criança Quente",
            "Adulto Muito Quente",
            "Hipotermia",
            "Dor Intensa"
        ],
        "amarelo": [
            "Hiperglicemia",
            "Adulto Quente",
            "Vômitos Persistentes",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Vômitos",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Diarréia e/ou Vômitos
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Alteração Súbita da Consciência",
            "Não Reage aos Pais",
            "Evacuação de Sangue Vivo ou Escurecido",
            "Vômito de Sangue",
            "Prostação, Hipotonia",
            "Criança Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Fezes Pretas ou em Groselha",
            "História Aguda de Vômito de Sangue",
            "Sinais de Desidratação",
            "Vômitos Persistentes",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Vômito",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Dispinéia em Adulto
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Baba-se",
            "Choque"
        ],
        "laranja": [
            "Dor Precordial ou Cardíaca",
            "Sat O2 Muito Baixa",
            "Frases Entrecortadas",
            "Hemoptise",
            "História Respiratória Significativa",
            "Início Agudo Após Trauma",
            "Pulso Anormal",
            "Alteração Súbita da Consciência",
            "Dor Epigástrica",
            "PFE Muito Baixo"
        ],
        "amarelo": [
            "Sat O2 Baixa",
            "História de Hemoptise",
            "Dor Pleurítica",
            "PFE Baixo"
        ],
        "verde": [
            "Chieira",
            "Tosse Produtiva",
            "Trauma Torácido",
            "Evento Recente"
        ]
    },
    {//Dispinéia em Criança
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Baba-se",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Sat O2 Muito Baixa",
            "Esforço Respiratório Aumentado",
            "Frases Entrecortadas",
            "Hemoptise",
            "História Respiratória Significativa",
            "Início Agudo Pós-trauma",
            "Resposta à Voz ou à Dor Apenas",
            "Exaustão",
            "PFE Muito Baixo"
        ],
        "amarelo": [
            "Sat O2 Baixo",
            "História de Hemoptise",
            "História Discordante",
            "Dor Pleuritica",
            "PFE Baixo"
        ],
        "verde": [
            "Chieira",
            "Tosse Produtiva",
            "Truma Torácico",
            "Evento Recente"
        ]
    },
    {//Doença Mental
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Hipoglicemia"
        ],
        "laranja": [
            "Alteração súbita da consciência",
            "Alto risco de agredir outros",
            "Alto risco de autoagressão"
        ],
        "amarelo": [
            "História Psiquiátrica Importante",
            "Risco Moderado de agredir outros",
            "Risco Moderado de autoagressão",
            "Agitação psicomotora",
            "Comportamento conturbador"
        ],
        "verde": [
        ]
    },
    {// DST
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
        ],
        "laranja": [
            "Alteração Súbita da Consciência",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor testicular",
            "Erupção ou vesículas disseminadas",
            "Imunossupressão conhecida",
            "Dor ao movimento articular",
            "Articulação quente",
            "Adulto quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Corrimento",
            "Dor leve recente",
            "Evento recente"
        ]
    },
    {//Dor Abdominal em Adulto
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Dor Irradiada Para o Dorso",
            "Hemoptise",
            "Melena",
            "Sangramento Vaginal, > 20 Semanas de Gravidez",
            "Adulto Muito Quente",
            "Dor Epigástrica",
            "Dor Intensa"
        ],
        "amarelo": [
            "Gravidez Possível",
            "Dor Irradiada Para Ombro",
            "Fezes Pretas ou em Groselha",
            "História Aguda de Vômito de Sangue",
            "Vômitos Persistentes",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Vômitos",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Dor Abdominal em Criança
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Dor Irradia Para o Dorso",
            "Vômito de Sangue",
            "Evacuação de Sangue Vivo ou Escurecido",
            "Sangramento Vaginal, > 20 Semanas de Gravidez",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Gravidez Possível",
            "Dor Irradiada Para Ombro",
            "Fezes Pretas ou em Groselha",
            "História Aguda de Vômito de Sangue",
            "Vômitos Persistentes",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Vômitos",
            "Dor Leve Recentemente",
            "Evento Recente"
        ]
    },
    {//Dor Cervical
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Sinais de Meningismo",
            "Déficit Neurológico Agudo",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Criança Quente",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Trauma direto no pescoço",
            "Déficit Neurológico Novo",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
        ]
    },
    {//Dor de Garganta
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Baba-se",
            "Choque"
        ],
        "laranja": [
            "Alteração Súbita da Cosciência",
            "Adulto Muito Quente",
            "Criança Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "História de Viagem Recente",
            "Início Súbito",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Dor Lombar

    },
    {//Dor Tetsicular

    },
    {//Dor torácica
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Dor Precordial ou Cardíaca",
            "Dispnéia Aguda",
            "Pulso Anormal",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor Pleuritica",
            "Vômitos Persistentes",
            "História Cardíaca Importante",
            "Dor Moderada"
        ],
        "verde": [
            "Vômitos",
            "Dor Leve Recentemente",
            "Evento Recente"
        ]
    },
    {//Embriaguez Aparente
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa",
            "Convulsionando",
            "Hipoglicemia"
        ],
        "laranja": [
            "Alteração da Consciência Não Totalmente Atribuível ao Álcool",
            "Déficit Neurológico Agudo",
            "História Inadequada",
            "Hipotermia"
        ],
        "amarelo": [
            "Alteração do Nível da Consciência Totalmente Atribuível ao Álcool",
            "Déficit Neurológico Novo",
            "História de Incosciência",
            "História Discordante",
            "História de Trauma Cranioencefálico"
        ],
        "verde": [
            "Trauma Recente",
            "Dor Leve Recente"
        ]
    },
    {//Erupção Cutânea
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Edema Facial",
            "Edema de Língua",
            "Dispnéia Aguda",
            "Alteração Súbita da Consciência",
            "História Alérgica Importante",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Adulto Muito Quente",
            "Dor ou Coceira Intensas"
        ],
        "amarelo": [
            "Erupção ou Vesículas Disseminadas",
            "História Discordante",
            "Adulto Quente",
            "Dor ou Coceira Moderadas"
        ],
        "verde": [
            "Febril",
            "Dor ou Coceira Leves Recentes",
            "Evento Recente"
        ]
    },
    {//Exposição a Agente Químico

    },
    {//Feridas
    },
    {//Gravidez
    },
    {//Hemorragia Digestiva
    },
    {//Hemorragia Digestiva
    },
    {//Hemorragia Digestiva
    },
    {//Hemorragia Digestiva
    },
    {//Mordeduras e Picadas
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Edema Facial",
            "Edema de Língua",
            "Frases Entrecortadas",
            "Hemorragia Maior Incontrolável",
            "História Alérgica Importante",
            "Envenenamento de Alta Mortalidade",
            "Alteração Súbita Da Consciência",
            "Sat O2 Muito Baixa",
            "Adulto Muito Quente",
            "Dor ou Coceira Intensas"
        ],
        "amarelo": [
            "Sat O2 Baixa",
            "Hemorragia Menor Incontrolável",
            "Erupção ou Vesículas Disseminadas",
            "Envenenamento de Moderada Mortalidade",
            "Adulto Quente",
            "Dor ou Coceira Moderadas"
        ],
        "verde": [
            "Inflamação Local",
            "Infecção Local",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Overdose e Envenenamento
        
    },
    {//Pais Preocupados
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Sinais de Dor Intensa",
            "Resposa à Dor ou à Voz Apenas",
            "Não Reage aos Pais",
            "História de Overdose ou Envenenamento",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Prostração e/ou Hipotonia",
            "Criança Quente"
        ],
        "amarelo": [
            "Sinais de Dor Moderada",
            "Choro Prolongado ou Ininterrupto",
            "Inconsolável Pelos Pais",
            "História Discordante",
            "Sinais de Desidratação",
            "Sem Urinar",
            "Não se Alimenta"
        ],
        "verde": [
            "Sinais de Dor Leve Recente",
            "Febril",
            "Comportamento Atípico",
            "Evento Recente"
        ]
    },
    {//Palpitações
        
    },
    {//Palpitações
        
    },
    {//Palpitações
        
    },
    {//Palpitações
        
    },
    {//Palpitações
        
    },
    {//Palpitações
        
    },
    {//Palpitações
        
    },
    {//Quedas
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa",
            "Convulsionando",
            "Hipoglicemia"
        ],
        "laranja": [
            "Mecanismo de Trauma Significativo",
            "Pulso Anormal",
            "Hemorragia Maior Incontrolável",
            "Déficit Neurológico Agudo",
            "Alteração Súbita da Consciência",
            "Hipotermia",
            "Dor Intensa"
        ],
        "amarelo": [
            "História de Inconsciência",
            "Distúrbio de Coagulação",
            "História Discordante",
            "Hemorragia Menor Incontrolável",
            "Déficit Neurológico Novo",
            "Deformidade Grosseira",
            "Fratura Exposta",
            "Dor Moderada"
        ],
        "verde": [
            "Deformidade",
            "Inchaço",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Queimaduras
        
    },
    {//Queimaduras
        
    },
    
    {//Trauma Toracoabdominal
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque",
            "Criança Não Reativa",
            "Convulsionando",
            "Hipogrlicemia"
        ],
        "laranja": [
            "Mecanismo de Trauma Significativo",
            "Hemorragia Maior Incontrolável",
            "Alteração Súbita da Consciência",
            "Déficit Neurológico Agudo",
            "Dor Intensa"
        ],
        "amarelo": [
            "História de Inconsciência",
            "Distúrbio de Coagulação",
            "História Discordante",
            "Hemorragia Menor Incontrolável",
            "Vômitos Persistentes",
            "Déficit Neurológico Novo",
            "Dor Moderada"
        ],
        "verde": [
            "Hematoma de Couro Cabeludo",
            "Vômito",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Outros
        "vermelho": [
            "Politraumatismo Grave",
            "Grande Queimado (>25%)",
            "TCE Grave",
            "Dor Torácica",
            "Crise Convulsiva",
            "Intoxixação Exógena",
            "Perfuração no Peito, Abdomem e Cabeça",
            "PCR",
            "Pulso > 140 ou < 10 rpm",
            "PAD < 80 mmHg",
            "Acidente Acima de 35 km",
            "Fratura 1/2/9/10/11 Costela",
            "Possível Aspiração",
            "Anafilaxia",
            "Tentativa de Suicídio"
        ],
        "amarelo": [
            "Politraumatismo, Glasgow 13 e 15",
            "Cefaléia Grave (Parestesia, Disladia, Disfagia)",
            "TCE",
            "Síncope",
            "Vítima de Abuso Sexual",
            "Febre",
            "Histórico de Convulsão",
            "Diabetes Descompensada",
            "Epistaxe com Alteração de SSVV"
        ]
    }
];