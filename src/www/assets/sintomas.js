var lista_sintomas = [
    {//Agressão
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia exaguinante",
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
            "Erupção ou Vesículas Disseminadas",
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
            "História de Trauma Cranioencefálico",
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
            "Chieira",
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
            "História de Trauma Cranioencefálico",
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
            "Erupção Cutânea Fixa",
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
            "Erupção Cutânea Fixa",
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
            "Erupção Cutânea Fixa",
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
            "Exaustão",
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
            "Tra" +
            "uma Torácico",
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
            "Vômito de Sangue",
            "Evacuação de Sangue Vivo/Escurecido",
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
            "Sinais de Dor Intensa",
            "Vômito de Sangue",
            "Evacuação de Sangue Vivo ou Escurecido",
            "Criança Quente",
            "Púrpura",
            "Erupção Cutânea Fixa"
        ],
        "amarelo": [
            "Sinais de Dor Moderada",
            "Inconsolável Pelos Pais",
            "Massa Abdominal Visível",
            "Fezes Pretas ou em Groselha",
            "História Aguda de Vômito de Sangue",
            "Vômitos Persistentes",
            "História Discordante"
        ],
        "verde": [
            "Sinais de Dor Leve Recente",
            "Vômitos",
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
            "Trauma Direto no Pescoço",
            "Déficit Neurológico Novo",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Dor Leve Recente",
            "Evento Recente"
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
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Déficit Neurológico Agudo",
            "Mecanismo de Trauma Significativo",
            "Criança Quente",
            "Adulto Muito Quente",
            "Dor Abdominal",
            "Dor Intensa"
        ],
        "amarelo": [
            "Déficit Neurológico Novo",
            "Truama Direto no Dorso",
            "Adulto Quente",
            "Cólicas",
            "História discordante",
            "Dor Moderada"
        ],
        "verde": [
            "Dor Leve Recentemente",
            "Evento Recente"
        ]

    },
    {//Dor Tetsicular
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Idade < 25 anos",
            "Gagrena de escroto",
            "Adulto Muito Quente",
            "Criança Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Celulite de Escroto",
            "Cólicas",
            "Vômitos Persistentes",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Trauma de escroto",
            "Vômitos",
            "Dor Leve Recente",
            "Evento Recente"
        ]
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
            "Dor Pleurítica",
            "Vômitos Persistentes",
            "História Cardíaca Importante",
            "Dor Moderada"
        ],
        "verde": [
            "Vômitos",
            "Dor Leve Recente",
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
            "Criança Quente",
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
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Estridor",
            "Respiração Inadequada",
            "Choque",
            "Convulsionando",
            "Lesão Ocular Química Aguda"
        ],
        "laranja": [
            "Mortalidade alta",
            "Edema Facial",
            "Edema de Língua",
            "Alteração Súbita Da Consciência",
            "Risco de contaminação Persistente",
            "Sat O2 Muito Baixa",
            "Dor Intensa"
        ],
        "amarelo": [
            "Mortalidade Moderada",
            "Erupção ou Vesículas Disseminadas",
            "História discordante",
            "Sat O2 Baixa",
            "Dor Moderada"
        ],
        "verde": [
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Feridas
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Hemorragia Maior Incontrolável",
            "Comprometimento vascular distal",
            "Alteração Súbita Da Consciência",
            "Dor Intensa"
        ],
        "amarelo": [
            "História discordante",
            "Hemorragia Menor Incontrolável",
            "Déficit Neurológico Novo",
            "Dor Moderada"
        ],
        "verde": [
            "Infecção local",
            "Inflamação local",
            "Evento Recente",
            "Dor Leve Recente"
        ]
    },
    {//Gravidez
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque",
            "Apresentação de partes fetais",
            "Prolapso de Cordão Umbilical",
            "Convulsionando"
        ],
        "laranja": [
            "Trabalho de parto",
            "Alteração Súbita Da Consciência",
            "História de Convulsão",
            "Sangramento Vaginal Intenso",
            "Sangramento Vaginal, > 20 semanas gravidez",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor abdominal",
            "Pressão arterial elevada",
            "História de trauma",
            "História discordante",
            "Dor Irradiada para ombro",
            "Sangramento Vaginal",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Dor Leve Recente"
        ]
    },
    {//Hemorragia Digestiva
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Vômito de sangue",
            "Evacuação de Sangue Vivo ou Escurecido",
            "História de Hemorragia Digestiva Importante",
            "Alteração Súbita Da Consciência",
            "Dor Intensa"
        ],
        "amarelo": [
            "Fezes Pretas ou em Groselha",
            "História Aguda de Vômito de Sangue",
            "Distúrbio da Coagulação",
            "Vômitos Persistentes",
            "Dor Moderada"
        ],
        "verde": [
            "Vômitos",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Infecções Locais e Abcessos
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Comprometimento Vascular Distal",
            "Enfisema Subcutâneo",
            "Criança quente",
            "Adulto muito quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor ao movimento articular",
            "Articulação quente",
            "Adulto quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Evento Recente",
            "Dor Leve Recente"
        ]
    },
    {//Mal Estar em Adulto
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Hipoglicemia",
            "Convulsionando"
        ],
        "laranja": [
            "Alteração Súbita Da Consciência",
            "Hemoptise",
            "Pulso anormal",
            "Sinais de Meningismo",
            "Déficit Neurológico Agudo",
            "Risco Especial de Infecção",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Adulto muito quente",
            "Hipotermia",
            "Dor Intensa"
        ],
        "amarelo": [
            "Inicio Súbito",
            "História de hemoptise",
            "História de Viagem Recente",
            "Déficit Neurológico Novo",
            "Imunossupressão Conhecida",
            "Distúrbio de Coagulação",
            "Erupção ou Vesículas Disseminadas",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Mal Estar em Criança
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Hipoglicemia",
            "Convulsionando",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Sinais de Dor Intensa",
            "Resposta a Dor ou a Voz Apenas",
            "Não Reage aos Pais",
            "Sinais de Meningismo",
            "Erupção Cutânea Fixa",
            "Púrpura",
            "Criança quente",
            "Hipotermia"
        ],
        "amarelo": [
            "Sinais de Dor Moderada",
            "História discordante",
            "Sinais de Desidratação",
            "Sem Urinar",
            "Não se alimenta"
        ],
        "verde": [
            "Sinais de Dor Leve Recente",
            "Febril",
            "Comportamento atípico",
            "Evento Recente"
        ]
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
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Criança Não Reativa",
            "Hipoglicemia",
            "Convulsionando",
        ],
        "laranja": [
            "Pulso anormal",
            "Mortalidade alta",
            "Alteração Súbita Da Consciência",
            "Alto risco de Nova Autoagressão",
            "Sat O2 Muito Baixa"
        ],
        "amarelo": [
            "Mortalidade Moderada",
            "Risco moderado de nova autoagressão",
            "História Psiquiátrica Importante",
            "História de Inconsciência",
            "Agitação psicomotora",
            "História Discordante",
            "Sat O2 Baixa"
        ],
        "verde": [
        ]
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
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Dor Precordial ou Cardíaca",
            "Dispinéia Aguda",
            "História de Overdose ou Envenenamento",
            "Pulso anormal",
            "Alteração Súbita Da Consciência",
            "Criança Quente",
            "Adulto Muito Quente"
        ],
        "amarelo": [
            "Palpitação Atual",
            "História de Inconsciência",
            "História Cardíaca Importante",
            "Adulto Quente"
        ],
        "verde": [
            "Evento recente"
        ]
    },
    {//Problemas Dentários
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Hemorragia Maior Incontrolável",
            "Criança Quente",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Hemorragia Menor Incontrolável",
            "Avulsão Dentária Aguda",
            "Distúrbio de Coagulação",
            "História Discordante",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Edema Facial",
            "Dor leve recente",
            "Evento recente"
        ]
    },
    {//Problemas em Extremidades
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Dispinéia aguda",
            "Pele Crítica",
            "Comportamento Vascular Distal",
            "Hemorragia Maior Incontrolável",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor pleurítica",
            "Deformidade grosseira",
            "Fratura exposta",
            "Hemorragia menor incontrolável",
            "Déficit Neurológico Novo",
            "Distúrbio de coagulação",
            "História discordante",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Edema",
            "Dor leve recente",
            "Evento recente"
        ]
    },
    {//Problemas em Face
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Alteração Súbita Da Consciência",
            "Hemorragia maior Incontrolável",
            "Criança Quente",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Deformidade Grosseira",
            "Distúrbio de Coagulação",
            "Redução Recente da Acuidade Visual",
            "Hemorragia menor Incontrolável",
            "História de Inconsciência",
            "Avulaçãp Dentária Aguda",
            "História Discordante",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Diplopia",
            "Hematoma de Orelha",
            "Sensibilidade na Face Alterada",
            "Inchaço na face",
            "Olho vermelho",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Problemas em Olhos
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque",
            "Lesão Ocular Química Aguda"
        ],
        "laranja": [
            "Trauma ocular prenetante",
            "Perda Total da Visão Aguda",
            "Adulto Muito Quente",
            "Criança Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Redução Recente da Acuidade Visual",
            "História discordante",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Olho vermelho",
            "Sensação de Corpo Estranho",
            "Diplopia",
            "Dor leve recente",
            "Evento recente"
        ]
    },
    {//Problemas em Ouvidos
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Choque"
        ],
        "laranja": [
            "Alteração Súbita Da Consciência",
            "Hemorragia Maior Incontrolável",
            "Criança Quente",
            "Adulto Muito Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Hemorragia Menor Incontrolável",
            "História de Trauma Cranioencefálico",
            "Vômitos Persistentes",
            "História discordantes",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Febril",
            "Perda recente de audição",
            "Hematoma de Orelha",
            "Vertigem",
            "Dor leve recente",
            "Evento recente"
        ]
    },
    {//Problemas Urinários
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Priaprismo",
            "Adulto Muito Quente",
            "Criança Quente",
            "Dor Intensa"
        ],
        "amarelo": [
            "Cólicas",
            "Hematúria Franca",
            "Retenção Urinária",
            "Vômitos Persistentes",
            "Adulto Quente",
            "Dor Moderada"
        ],
        "verde": [
            "Vômito",
            "Disúria",
            "Dor leve recente",
            "Evento recente"
        ]
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
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Estridor",
            "Choque",
            "Criança Não Reativa"
        ],
        "laranja": [
            "Edema facial",
            "Lesão por Inalação",
            "Dispnéia Aguda",
            "Mecanismo de Trauma Significativo",
            "Alteração Súbita da Consciência",
            "Sat 02 Muito Baixa",
            "Dor Intensa"
        ],
        "amarelo": [
            "Sat 02 baixa",
            "Inalação de Fumaça",
            "História Discordante",
            "Queimadura Elétrica",
            "Queimadura Química",
            "Dor Moderada"
        ],
        "verde": [
            "Inflamação local",
            "Infecção local",
            "Dor Leve Recente",
            "Evento Recente"
        ]
    },
    {//Sangramento Vaginal
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque"
        ],
        "laranja": [
            "Alteração Súbita da Consciência",
            "Sangramento Vaginal, > 20 Semanas de Gravidez",
            "Sangramento vaginal Intenso",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor Abdominal",
            "Dor Irradiada para Ombro",
            "Trauma Vaginal",
            "Distúrbio de Coagulação",
            "História Discordante",
            "Gravidez Possível",
            "Dor Moderada"
        ],
        "verde": [
            "Dor Leve Recente",
            "Evento Recente"
        ]

    },
    {//Trauma Cranioencefálico
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque",
            "Criança Não Reativa",
            "Convulsionando",
            "Hipoglicemia"
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
    {//Trauma Maior
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque",
            "Criança Não Reativa",
        ],
        "laranja": [
            "Dispinéia aguda",
            "Hemorragia Maior Incontrolável",
            "Alteração Súbita da Consciência",
            "Déficit Neurológico Agudo",
            "Mecanismo de Trauma Significativo",
            "Dor Intensa"
        ],
        "amarelo": [
            "Hemorragia Menor Incontrolável",
            "História de Inconsciência",
            "Comorbidade Importante",
            "Distúrbio de Coagulação",
            "Dor Moderada"
        ],
        "verde": [
        ]
    },
    {//Trauma Toracoabdominal
        "vermelho": [
            "Obstrução de Vias Aéreas",
            "Respiração Inadequada",
            "Hemorragia Exanguinante",
            "Choque",
        ],
        "laranja": [
            "Dispinéia Aguda",
            "Hemorragia Maior Incontrolável",
            "Mecanismo de Trauma Significativo",
            "Evisceração",
            "Dor Intensa"
        ],
        "amarelo": [
            "Dor Pleuritica",
            "Hemorragia Menor Incontrolável",
            "Distúrbio de Coagulação",
            "História Discordante",
            "Dor Moderada"
        ],
        "verde": [
            "Inflamação local",
            "Infecção local",
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