const dogBreeds = [
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    image: 'https://images.ctfassets.net/denf86kkcx7r/sMkIKN52G66tFRUwxa4KO/69b124fa08ab1993ec18ae247141d78e/133535415_xl_normal_none__1_.webp',
    size: 'Grande',
    temperament: 'Amigable, inteligente y devoto',
    description: 'El Golden Retriever es una raza muy popular conocida por su naturaleza amable y su pelaje dorado. Son excelentes perros familiares y muy fáciles de entrenar.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día con comida de alta calidad',
        'Porción diaria: 3-4 tazas de alimento seco',
        'Evitar sobrealimentación para prevenir obesidad',
        'Asegurar acceso constante a agua fresca'
      ],
      exercise: [
        'Requiere al menos 60 minutos de ejercicio diario',
        'Disfruta de juegos de buscar y traer',
        'Excelente nadador, ideal para actividades acuáticas',
        'Caminatas largas y tiempo de juego en espacios abiertos'
      ],
      grooming: [
        'Cepillado diario para evitar enredos',
        'Baño cada 6-8 semanas',
        'Corte de uñas mensual',
        'Limpieza de orejas semanal para prevenir infecciones'
      ],
      health: [
        'Propenso a displasia de cadera y codo',
        'Revisiones veterinarias cada 6 meses',
        'Vacunación completa y desparasitación regular',
        'Monitorear peso para prevenir problemas articulares'
      ]
    }
  },
  {
    id: 'pastor-aleman',
    name: 'Pastor Alemán',
    image: 'https://www.consumer.es/app/uploads/fly-images/441290/Pastor_aleman-1200x550-cc.jpg',
    size: 'Grande',
    temperament: 'Valiente, leal e inteligente',
    description: 'El Pastor Alemán es una raza versátil conocida por su inteligencia y lealtad. Son excelentes perros de trabajo y protectores de la familia.',
    care: {
      feeding: [
        'Alimentar 2 veces al día con proteína de alta calidad',
        'Porción diaria: 3-4 tazas según actividad física',
        'Suplementos de glucosamina para articulaciones',
        'Evitar ejercicio intenso inmediatamente después de comer'
      ],
      exercise: [
        'Necesita al menos 90 minutos de ejercicio diario',
        'Entrenamiento mental y físico constante',
        'Ideal para agility y deportes caninos',
        'Caminatas largas y sesiones de juego activo'
      ],
      grooming: [
        'Cepillado 3-4 veces por semana',
        'Muda abundante 2 veces al año',
        'Baño cada 8-12 semanas',
        'Cuidado dental regular'
      ],
      health: [
        'Susceptible a displasia de cadera',
        'Chequeos veterinarios regulares',
        'Atención a mielopatía degenerativa',
        'Mantener peso saludable para proteger articulaciones'
      ]
    }
  },
  {
    id: 'labrador',
    name: 'Labrador Retriever',
    image: 'https://images.unsplash.com/photo-1718578851384-c1d16427ec2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJyYWRvciUyMGRvZ3xlbnwxfHx8fDE3NjQ4NzM1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'Grande',
    temperament: 'Sociable, gentil y amigable',
    description: 'El Labrador es la raza más popular del mundo. Son conocidos por su naturaleza amable, energía y amor por el agua.',
    care: {
      feeding: [
        'Alimentar 2 veces al día con control de porciones',
        'Porción diaria: 2.5-3.5 tazas de alimento',
        'Propensos a obesidad, controlar peso regularmente',
        'Comida rica en proteínas y omega-3'
      ],
      exercise: [
        'Requiere 60-90 minutos de actividad diaria',
        'Natación es ejercicio ideal para esta raza',
        'Juegos interactivos y entrenamiento',
        'Prevenir aburrimiento para evitar comportamientos destructivos'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Pelaje resistente al agua que muda moderadamente',
        'Baño cada 2 meses',
        'Limpieza de orejas caídas regularmente'
      ],
      health: [
        'Propenso a obesidad y problemas articulares',
        'Revisiones veterinarias bianuales',
        'Atención a problemas de cadera y codo',
        'Control de peso estricto para longevidad'
      ]
    }
  },
  {
    id: 'beagle',
    name: 'Beagle',
    image: 'https://lirp.cdn-website.com/d91d0839/dms3rep/multi/opt/Cachorros+beagle+en+venta+pic+2-640w.jpg',
    size: 'Mediano',
    temperament: 'Curioso, amigable y alegre',
    description: 'El Beagle es un perro de caza de tamaño mediano con un excelente sentido del olfato. Son perros familiares cariñosos y enérgicos.',
    care: {
      feeding: [
        'Alimentar 2 veces al día con porciones controladas',
        'Porción diaria: 1.5-2 tazas de alimento',
        'Tendencia a comer en exceso, controlar peso',
        'Alimento de alta calidad para mantener energía'
      ],
      exercise: [
        'Necesita 60 minutos de ejercicio diario',
        'Juegos que estimulen su olfato',
        'Paseos con correa (tienden a seguir olores)',
        'Actividades mentales para prevenir aburrimiento'
      ],
      grooming: [
        'Cepillado semanal',
        'Pelaje corto de fácil mantenimiento',
        'Baño mensual o cuando sea necesario',
        'Limpieza de orejas largas 2 veces por semana'
      ],
      health: [
        'Propenso a obesidad, monitorear dieta',
        'Atención a problemas de oído por orejas largas',
        'Chequeos veterinarios anuales',
        'Vacunaciones al día y control de parásitos'
      ]
    }
  },
  {
    id: 'poodle',
    name: 'Poodle',
    image: 'https://www.shutterstock.com/image-photo/cute-toy-poodle-maltese-maltipoo-260nw-2321990269.jpg',
    size: 'Mediano',
    temperament: 'Inteligente, activo y elegante',
    description: 'El Poodle es una raza muy inteligente y elegante, disponible en tres tamaños. Son hipoalergénicos y excelentes para familias.',
    care: {
      feeding: [
        'Alimentar 2 veces al día según tamaño',
        'Porción diaria: 1-2.5 tazas dependiendo del tamaño',
        'Alimento premium para mantener pelaje saludable',
        'Evitar alimentos con colorantes artificiales'
      ],
      exercise: [
        'Requiere 45-60 minutos de actividad diaria',
        'Estimulación mental constante',
        'Disfruta de juegos de inteligencia',
        'Caminatas diarias y tiempo de juego'
      ],
      grooming: [
        'Cepillado diario para evitar nudos',
        'Corte profesional cada 6-8 semanas',
        'Baño cada 3-4 semanas',
        'Pelaje hipoalergénico que requiere mantenimiento regular'
      ],
      health: [
        'Atención a problemas dentales',
        'Propenso a luxación de rótula (toy y miniatura)',
        'Chequeos veterinarios regulares',
        'Cuidado especial de ojos y oídos'
      ]
    }
  },
  {
    id: 'bulldog',
    name: 'Bulldog Inglés',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-image-of-an-english-bulldog-running-on-the-dirt-image_2893735.jpg',
    size: 'Mediano',
    temperament: 'Calmado, valiente y amigable',
    description: 'El Bulldog Inglés es conocido por su apariencia distintiva y naturaleza gentil. Son excelentes compañeros de apartamento.',
    care: {
      feeding: [
        'Alimentar 2 veces al día en porciones pequeñas',
        'Porción diaria: 1.5-2 tazas de alimento de calidad',
        'Evitar sobrealimentación por tendencia a obesidad',
        'Comida fácil de digerir por problemas respiratorios'
      ],
      exercise: [
        'Ejercicio moderado: 20-40 minutos diarios',
        'Evitar ejercicio en clima caluroso',
        'Paseos cortos y frecuentes',
        'Sensible al calor por hocico achatado'
      ],
      grooming: [
        'Limpieza diaria de pliegues faciales',
        'Cepillado 2-3 veces por semana',
        'Baño mensual con secado completo de arrugas',
        'Corte de uñas regular'
      ],
      health: [
        'Propenso a problemas respiratorios',
        'Atención especial a temperatura corporal',
        'Limpieza de pliegues para prevenir infecciones',
        'Chequeos veterinarios frecuentes'
      ]
    }
  },
  {
    id: 'husky',
    name: 'Husky Siberiano',
    image: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
    size: 'Grande',
    temperament: 'Enérgico, independiente y amistoso',
    description: 'El Husky Siberiano es una raza de trabajo conocida por su resistencia y hermosos ojos azules. Requieren dueños experimentados y mucho ejercicio.',
    care: {
      feeding: [
        'Alimentar 2 veces al día con proteína moderada',
        'Porción diaria: 2-3 tazas de alimento de calidad',
        'Tienen metabolismo eficiente, no sobrealimentar',
        'Alimentos ricos en ácidos grasos para pelaje'
      ],
      exercise: [
        'Requiere 120+ minutos de ejercicio diario',
        'Ideal para correr y actividades de resistencia',
        'Necesita espacio amplio para correr',
        'Disfruta de climas fríos, cuidado en verano'
      ],
      grooming: [
        'Cepillado diario durante la muda (2 veces al año)',
        'Cepillado semanal el resto del año',
        'Baño cada 3 meses o cuando sea necesario',
        'Pelaje de doble capa muy denso'
      ],
      health: [
        'Propenso a problemas oculares',
        'Displasia de cadera menos común que otras razas grandes',
        'Chequeos oftalmológicos anuales',
        'Sensible al calor, evitar sobrecalentamiento'
      ]
    }
  },
  {
    id: 'chihuahua',
    name: 'Chihuahua',
    image: 'https://img.freepik.com/fotos-premium/perro-chihuahua-encuentra-cesped-verde_636131-561.jpg',
    size: 'Pequeño',
    temperament: 'Alerta, valiente y devoto',
    description: 'El Chihuahua es la raza de perro más pequeña del mundo. Son ferozmente leales a sus dueños y tienen una personalidad grande en un cuerpo pequeño.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día en porciones pequeñas',
        'Porción diaria: 1/4 a 1/2 taza de alimento',
        'Propenso a hipoglucemia, no saltar comidas',
        'Alimento formulado para razas pequeñas'
      ],
      exercise: [
        'Necesita 30 minutos de ejercicio diario',
        'Paseos cortos varias veces al día',
        'Juegos en interiores son suficientes',
        'Sensible al frío, usar abrigo en invierno'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Baño mensual',
        'Limpieza dental diaria (propensos a problemas dentales)',
        'Corte de uñas cada 2-3 semanas'
      ],
      health: [
        'Propenso a problemas dentales',
        'Riesgo de luxación de rótula',
        'Fontanela abierta en algunos individuos',
        'Chequeos dentales regulares son esenciales'
      ]
    }
  },
  {
    id: 'dachshund',
    name: 'Dachshund (Salchicha)',
    image: 'https://smart.dhgate.com/wp-content/uploads/2025/08/shutterstock_2423158743.webp',
    size: 'Pequeño',
    temperament: 'Curioso, valiente y terco',
    description: 'El Dachshund, conocido como "perro salchicha", fue criado para cazar tejones. Su cuerpo alargado y patas cortas los hace únicos y adorables.',
    care: {
      feeding: [
        'Alimentar 2 veces al día con porciones controladas',
        'Porción diaria: 1/2 a 1.5 tazas según tamaño',
        'Control estricto de peso para proteger columna',
        'Evitar sobrepeso a toda costa'
      ],
      exercise: [
        'Necesita 45-60 minutos de ejercicio moderado',
        'Evitar saltos y escaleras (proteger espalda)',
        'Caminatas en terreno plano',
        'Juegos mentales para estimulación'
      ],
      grooming: [
        'Cepillado varía según tipo de pelo (corto, largo o duro)',
        'Pelo corto: cepillado semanal',
        'Pelo largo: cepillado 3-4 veces por semana',
        'Baño cada 4-6 semanas'
      ],
      health: [
        'Alto riesgo de problemas de columna vertebral',
        'Prevenir saltos desde alturas',
        'Usar rampas en lugar de escaleras',
        'Mantener peso ideal es crítico'
      ]
    }
  },
  {
    id: 'yorkshire',
    name: 'Yorkshire Terrier',
    image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-01/Yorkshire%20Terrier2.jpg?itok=R7q86_NP',
    size: 'Pequeño',
    temperament: 'Confiado, inteligente y cariñoso',
    description: 'El Yorkshire Terrier es un perro pequeño con una gran personalidad. Su pelaje sedoso y elegancia los hace muy populares como perros de compañía.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día',
        'Porción diaria: 1/2 a 3/4 taza de alimento',
        'Comida de alta calidad para razas pequeñas',
        'Propensos a estómagos sensibles'
      ],
      exercise: [
        'Necesita 30 minutos de actividad diaria',
        'Paseos cortos y juegos en casa',
        'Energía moderada pero necesita estimulación',
        'Proteger del frío extremo'
      ],
      grooming: [
        'Cepillado diario del pelaje largo',
        'Baño cada 2-3 semanas',
        'Corte profesional cada 6-8 semanas',
        'Limpieza dental diaria'
      ],
      health: [
        'Propenso a problemas dentales',
        'Luxación de rótula común',
        'Colapso traqueal en algunos casos',
        'Usar arnés en lugar de collar'
      ]
    }
  },
  {
    id: 'shih-tzu',
    name: 'Shih Tzu',
    image: 'https://images-ext-1.discordapp.net/external/plw-UDFs9KoSmVhTJ585XN_TYGoGTfDUEqYok9QP2e8/%3F_a%3DBACAGSGT%2522/https/res.cloudinary.com/deqangexi/image/upload/owsu3h96rgts7zimqci8v1y2drhc?format=webp&width=822&height=471',
    size: 'Pequeño',
    temperament: 'Afectuoso, juguetón y extrovertido',
    description: 'El Shih Tzu es una antigua raza china criada como perro de compañía para la realeza. Son cariñosos y excelentes para vivir en apartamentos.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1/2 a 1 taza de alimento',
        'Alimento de calidad para mantener pelaje brillante',
        'Propensos a alergias alimentarias'
      ],
      exercise: [
        'Necesita 20-30 minutos de ejercicio diario',
        'Paseos cortos y juegos suaves',
        'No tolera calor extremo (hocico achatado)',
        'Ideal para vida en apartamento'
      ],
      grooming: [
        'Cepillado diario obligatorio',
        'Baño cada 3-4 semanas',
        'Corte profesional mensual',
        'Limpieza facial diaria (pliegues y ojos)'
      ],
      health: [
        'Propenso a problemas oculares',
        'Sensibilidad respiratoria por hocico achatado',
        'Limpieza de ojos diaria',
        'Evitar ejercicio en clima muy caluroso'
      ]
    }
  },
  {
    id: 'rottweiler',
    name: 'Rottweiler',
    image: 'https://clinicalaveterinaria.it/wp-content/uploads/2024/12/Rottweiler-Clinica-La-Veterinaria.jpg',
    size: 'Grande',
    temperament: 'Leal, confiado y protector',
    description: 'El Rottweiler es una raza poderosa y leal, excelente como perro guardián. Con socialización adecuada, son cariñosos y protectores de la familia.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 4-6 tazas de alimento de calidad',
        'Control de porciones para evitar obesidad',
        'Evitar ejercicio antes y después de comer'
      ],
      exercise: [
        'Requiere 60-90 minutos de ejercicio diario',
        'Entrenamiento de obediencia esencial',
        'Necesita trabajo mental y físico',
        'Socialización temprana es crucial'
      ],
      grooming: [
        'Cepillado semanal',
        'Pelaje corto de fácil mantenimiento',
        'Baño cada 6-8 semanas',
        'Corte de uñas mensual'
      ],
      health: [
        'Propenso a displasia de cadera y codo',
        'Riesgo de problemas cardíacos',
        'Chequeos veterinarios regulares',
        'Control de peso para salud articular'
      ]
    }
  },
  {
    id: 'doberman',
    name: 'Doberman Pinscher',
    image: 'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/03/28/6240fa657732b.r_d.1287-707-4800.jpeg',
    size: 'Grande',
    temperament: 'Alerta, leal e intrépido',
    description: 'El Doberman es una raza elegante y atlética, conocida por su inteligencia y lealtad. Son excelentes perros guardianes y compañeros devotos.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 3-5 tazas según actividad',
        'Dieta rica en proteínas de calidad',
        'Prevenir torsión gástrica con comidas fraccionadas'
      ],
      exercise: [
        'Requiere 90+ minutos de ejercicio diario',
        'Entrenamiento mental constante',
        'Excelente para deportes caninos',
        'Necesita propósito y trabajo'
      ],
      grooming: [
        'Cepillado semanal',
        'Pelaje corto de bajo mantenimiento',
        'Baño cada 6-10 semanas',
        'Sensible al frío, proteger en invierno'
      ],
      health: [
        'Propenso a miocardiopatía dilatada',
        'Displasia de cadera',
        'Chequeos cardíacos regulares',
        'Hipotiroidismo en algunos casos'
      ]
    }
  },
  {
    id: 'border-collie',
    name: 'Border Collie',
    image: 'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/7d32ba22-9406-4d24-ab18-1a8f7f8153e8/article-border-collie.jpg',
    size: 'Mediano',
    temperament: 'Enérgico, inteligente y trabajador',
    description: 'El Border Collie es considerado la raza de perro más inteligente. Fueron criados para pastorear y requieren mucha estimulación mental y física.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1.5-2 tazas de alimento premium',
        'Ajustar según nivel de actividad',
        'Alimento rico en proteínas para energía'
      ],
      exercise: [
        'Requiere 120+ minutos de ejercicio diario',
        'Necesita trabajo mental constante',
        'Ideal para agility, flyball y pastoreo',
        'Puede desarrollar ansiedad sin suficiente actividad'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Muda moderada todo el año',
        'Baño cada 8-12 semanas',
        'Atención especial durante épocas de muda'
      ],
      health: [
        'Generalmente saludable',
        'Propenso a displasia de cadera',
        'Anomalía del ojo del collie (CEA)',
        'Epilepsia en algunos casos'
      ]
    }
  },
  {
    id: 'cocker-spaniel',
    name: 'Cocker Spaniel',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/%22Bill%22_-_Cocker_spaniel_anglais_2.JPG',
    size: 'Mediano',
    temperament: 'Gentil, alegre y afectuoso',
    description: 'El Cocker Spaniel es un perro deportivo de tamaño mediano con orejas largas características. Son cariñosos y excelentes perros de familia.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1.5-2.5 tazas de alimento',
        'Propensos a obesidad, controlar peso',
        'Alimento de calidad para mantener pelaje brillante'
      ],
      exercise: [
        'Necesita 60 minutos de ejercicio diario',
        'Disfruta de natación y juegos de buscar',
        'Paseos regulares y tiempo de juego',
        'Naturaleza deportiva requiere actividad regular'
      ],
      grooming: [
        'Cepillado diario o cada 2 días',
        'Baño cada 4-6 semanas',
        'Corte profesional cada 6-8 semanas',
        'Limpieza de orejas 2-3 veces por semana (muy importante)'
      ],
      health: [
        'Propenso a infecciones de oído',
        'Problemas oculares (cataratas, glaucoma)',
        'Displasia de cadera',
        'Limpieza de orejas es crítica para prevenir infecciones'
      ]
    }
  },
  {
    id: 'pomeranian',
    name: 'Pomeranian',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pomeranian_orange-sable_Coco.jpg/1200px-Pomeranian_orange-sable_Coco.jpg',
    size: 'Pequeño',
    temperament: 'Vivaz, amigable y curioso',
    description: 'El Pomeranian es un perro pequeño tipo spitz con un pelaje abundante y esponjoso. Son juguetones, enérgicos y se destacan por su carácter extrovertido.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día',
        'Porción diaria: 1/4 a 1/2 taza de alimento',
        'Alimento de alta calidad para razas pequeñas',
        'Control de peso para evitar obesidad'
      ],
      exercise: [
        'Necesita 30-40 minutos de ejercicio diario',
        'Paseos cortos varias veces al día',
        'Juegos interactivos en casa',
        'Socialización temprana importante'
      ],
      grooming: [
        'Cepillado diario del pelaje abundante',
        'Baño cada 3-4 semanas',
        'Corte profesional cada 6-8 semanas',
        'Cuidado especial durante la muda estacional'
      ],
      health: [
        'Propenso a luxación de rótula',
        'Problemas dentales frecuentes',
        'Colapso traqueal en algunos casos',
        'Chequeos veterinarios regulares'
      ]
    }
  },
  {
    id: 'maltes',
    name: 'Maltés',
    image: 'https://www.petstoyland.com/wp-content/uploads/2024/09/bichon-maltes-americano-paradispets-cachorro-cesped-1200x900.png',
    size: 'Pequeño',
    temperament: 'Gentil, juguetón y afectuoso',
    description: 'El Maltés es una raza antigua de compañía con un pelaje blanco sedoso y largo. Son perros elegantes, cariñosos y perfectos para vivir en apartamentos.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1/4 a 1/2 taza de alimento',
        'Comida premium para mantener pelaje brillante',
        'Evitar alimentos que manchen el pelaje blanco'
      ],
      exercise: [
        'Necesita 20-30 minutos de ejercicio diario',
        'Paseos cortos regulares',
        'Juegos suaves en interiores',
        'No requiere ejercicio intenso'
      ],
      grooming: [
        'Cepillado diario obligatorio',
        'Baño semanal o quincenal',
        'Limpieza de ojos diaria (manchas de lágrimas)',
        'Corte profesional mensual recomendado'
      ],
      health: [
        'Propenso a problemas dentales',
        'Manchas de lágrimas en ojos',
        'Luxación de rótula ocasional',
        'Sensible a alergias cutáneas'
      ]
    }
  },
  {
    id: 'pug',
    name: 'Pug (Carlino)',
    image: 'https://www.bonza.dog/wp-content/uploads/Pug-Dog-Health-Issues-Comprehensive-Guide-to-Common-Problems.webp',
    size: 'Pequeño',
    temperament: 'Encantador, travieso y cariñoso',
    description: 'El Pug es un perro pequeño y robusto con cara arrugada distintiva. Son compañeros leales, juguetones y se adaptan bien a la vida en espacios pequeños.',
    care: {
      feeding: [
        'Alimentar 2 veces al día con porciones controladas',
        'Porción diaria: 1/2 a 1 taza de alimento',
        'Muy propensos a obesidad, controlar peso estrictamente',
        'Evitar sobrealimentación y golosinas excesivas'
      ],
      exercise: [
        'Necesita 30-40 minutos de ejercicio moderado',
        'Paseos cortos en clima fresco',
        'Evitar ejercicio en calor extremo',
        'Sensible a temperaturas altas por hocico achatado'
      ],
      grooming: [
        'Limpieza diaria de pliegues faciales',
        'Cepillado 2-3 veces por semana',
        'Baño mensual',
        'Muda abundante, especialmente en primavera'
      ],
      health: [
        'Problemas respiratorios por braquicefalia',
        'Propenso a obesidad',
        'Problemas oculares (ojos saltones)',
        'Sensibilidad al calor extremo'
      ]
    }
  },
  {
    id: 'boston-terrier',
    name: 'Boston Terrier',
    image: 'https://mivet.com/wp-content/uploads/2022/03/iStock-1053410188.jpg',
    size: 'Pequeño',
    temperament: 'Amigable, brillante y divertido',
    description: 'El Boston Terrier, conocido como el "caballero americano", es un perro compacto y amigable. Son inteligentes, fáciles de entrenar y excelentes compañeros.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1/2 a 1.5 tazas según tamaño',
        'Comida de calidad para razas pequeñas',
        'Controlar peso para mantener figura atlética'
      ],
      exercise: [
        'Necesita 30-60 minutos de ejercicio diario',
        'Paseos regulares y tiempo de juego',
        'Actividades mentales estimulantes',
        'Cuidado con el calor por hocico corto'
      ],
      grooming: [
        'Cepillado semanal',
        'Pelaje corto de fácil mantenimiento',
        'Baño mensual o cuando sea necesario',
        'Limpieza regular de arrugas faciales'
      ],
      health: [
        'Problemas respiratorios leves',
        'Propenso a alergias cutáneas',
        'Problemas oculares ocasionales',
        'Sensibilidad a temperaturas extremas'
      ]
    }
  },
  {
    id: 'bulldog-frances',
    name: 'Bulldog Francés',
    image: 'https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge.webp',
    size: 'Mediano',
    temperament: 'Juguetón, adaptable y alerta',
    description: 'El Bulldog Francés es un perro compacto con orejas de murciélago características. Son cariñosos, sociables y perfectos para vida urbana.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1.5-2 tazas de alimento',
        'Control de porciones para evitar obesidad',
        'Alimento fácil de digerir'
      ],
      exercise: [
        'Necesita 30-45 minutos de ejercicio moderado',
        'Paseos cortos en clima fresco',
        'No puede nadar (cabeza pesada)',
        'Evitar ejercicio en calor extremo'
      ],
      grooming: [
        'Limpieza diaria de pliegues faciales',
        'Cepillado semanal',
        'Baño cada 4-6 semanas',
        'Limpieza de orejas grandes regularmente'
      ],
      health: [
        'Problemas respiratorios por braquicefalia',
        'Sensibilidad al calor y frío extremos',
        'Propenso a alergias',
        'Problemas de columna vertebral'
      ]
    }
  },
  {
    id: 'shetland-sheepdog',
    name: 'Shetland Sheepdog (Sheltie)',
    image: 'https://apupabove.com/cdn/shop/articles/Shetland_Sheepdog.webp?v=1742407997&width=1600',
    size: 'Mediano',
    temperament: 'Inteligente, leal y juguetón',
    description: 'El Shetland Sheepdog es un perro pastor pequeño pero ágil, similar a un Collie en miniatura. Son extremadamente inteligentes y excelentes en obediencia.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 3/4 a 2 tazas de alimento',
        'Ajustar según nivel de actividad',
        'Alimento de calidad para razas activas'
      ],
      exercise: [
        'Requiere 60-90 minutos de ejercicio diario',
        'Entrenamiento mental constante',
        'Excelente para agility y obediencia',
        'Disfruta de juegos de pastoreo'
      ],
      grooming: [
        'Cepillado 3-4 veces por semana',
        'Pelaje doble denso que muda estacionalmente',
        'Baño cada 6-8 semanas',
        'Cuidado especial durante épocas de muda'
      ],
      health: [
        'Generalmente saludable',
        'Propenso a displasia de cadera',
        'Anomalía del ojo del collie (CEA)',
        'Problemas de tiroides ocasionales'
      ]
    }
  },
  {
    id: 'springer-spaniel',
    name: 'English Springer Spaniel',
    image: 'https://www.zooplus.es/magazine/wp-content/uploads/2023/05/Springer-spaniel-ingles-1.webp',
    size: 'Mediano',
    temperament: 'Alegre, obediente y activo',
    description: 'El English Springer Spaniel es un perro deportivo versátil y enérgico. Son compañeros leales con una naturaleza alegre y disposición para trabajar.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1.5-2 tazas de alimento',
        'Comida de alta calidad para perros activos',
        'Control de peso regular'
      ],
      exercise: [
        'Requiere 60-90 minutos de ejercicio diario',
        'Disfruta de natación y juegos de buscar',
        'Necesita estimulación mental',
        'Ideal para actividades al aire libre'
      ],
      grooming: [
        'Cepillado 3-4 veces por semana',
        'Baño cada 4-6 semanas',
        'Corte profesional cada 6-8 semanas',
        'Limpieza frecuente de orejas largas'
      ],
      health: [
        'Propenso a infecciones de oído',
        'Displasia de cadera',
        'Problemas oculares (PRA)',
        'Control de peso importante'
      ]
    }
  },
  {
    id: 'schnauzer',
    name: 'Schnauzer Miniatura',
    image: 'https://cdn.royalcanin-weshare-online.io/qj_yMXwBRYZmsWpc2Lwy/v5/bp-lot-3-miniature-schnauzer-couleur-outdoor',
    size: 'Mediano',
    temperament: 'Alerta, valiente y amigable',
    description: 'El Schnauzer Miniatura es un perro pequeño pero robusto con barba y cejas características. Son vigilantes excelentes, inteligentes y llenos de personalidad.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1/2 a 1 taza de alimento',
        'Propensos a problemas de páncreas, dieta baja en grasa',
        'Evitar alimentos grasos y golosinas excesivas'
      ],
      exercise: [
        'Necesita 45-60 minutos de ejercicio diario',
        'Paseos regulares y tiempo de juego',
        'Estimulación mental importante',
        'Entrenamiento de obediencia recomendado'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Corte profesional cada 6-8 semanas',
        'Baño cada 4-6 semanas',
        'Cuidado especial de barba y cejas'
      ],
      health: [
        'Propenso a pancreatitis',
        'Problemas oculares (cataratas)',
        'Cálculos urinarios',
        'Dieta baja en grasa recomendada'
      ]
    }
  },
  {
    id: 'san-bernardo',
    name: 'San Bernardo',
    image: 'https://www.zooplus.es/magazine/wp-content/uploads/2020/01/san-bernardo-1.webp',
    size: 'Grande',
    temperament: 'Gentil, paciente y amigable',
    description: 'El San Bernardo es un perro gigante conocido por su naturaleza gentil y heroica historia de rescate en los Alpes. Son cariñosos y excelentes con niños.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día',
        'Porción diaria: 5-6 tazas de alimento de calidad',
        'Comida formulada para razas gigantes',
        'Suplementos para articulaciones recomendados'
      ],
      exercise: [
        'Necesita 30-60 minutos de ejercicio moderado',
        'Evitar ejercicio excesivo en cachorros',
        'Paseos tranquilos regulares',
        'Prefiere climas fríos'
      ],
      grooming: [
        'Cepillado diario (especialmente variedad de pelo largo)',
        'Baño cada 6-8 semanas',
        'Babeo abundante, limpiar regularmente',
        'Muda considerable todo el año'
      ],
      health: [
        'Propenso a displasia de cadera y codo',
        'Torsión gástrica (emergencia)',
        'Problemas cardíacos',
        'Esperanza de vida más corta (8-10 años)'
      ]
    }
  },
  {
    id: 'gran-danes',
    name: 'Gran Danés',
    image: 'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=720,height=405,fit=cover/animal/breed/dog/adult/6683b478016d5838164770.jpg',
    size: 'Grande',
    temperament: 'Amigable, paciente y dependiente',
    description: 'El Gran Danés es conocido como el "Apolo de los perros" por su tamaño majestuoso. A pesar de su tamaño, son gentiles, cariñosos y excelentes perros de compañía.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día (nunca una sola vez)',
        'Porción diaria: 6-8 tazas para razas gigantes',
        'Evitar ejercicio antes y después de comer',
        'Alimento específico para razas gigantes'
      ],
      exercise: [
        'Necesita 30-60 minutos de ejercicio moderado',
        'Evitar ejercicio intenso en cachorros',
        'Paseos tranquilos regulares',
        'No forzar actividad excesiva'
      ],
      grooming: [
        'Cepillado semanal',
        'Pelaje corto de fácil mantenimiento',
        'Baño cada 6-8 semanas',
        'Corte de uñas regular importante'
      ],
      health: [
        'Alto riesgo de torsión gástrica',
        'Displasia de cadera',
        'Problemas cardíacos (miocardiopatía)',
        'Esperanza de vida corta (7-10 años)'
      ]
    }
  },
  {
    id: 'papillon',
    name: 'Papillon',
    image: 'https://nfnatcane.es/blog/wp-content/uploads/2022/12/historia-de-la-raza-Papillon.jpg',
    size: 'Pequeño',
    temperament: 'Alegre, amigable e inteligente',
    description: 'El Papillon, cuyo nombre significa "mariposa" en francés, es conocido por sus orejas grandes y peludas. Son perros pequeños pero enérgicos, muy inteligentes y fáciles de entrenar.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día',
        'Porción diaria: 1/4 a 1/2 taza de alimento',
        'Comida de alta calidad para razas pequeñas',
        'Metabolismo rápido, no saltar comidas'
      ],
      exercise: [
        'Necesita 30-45 minutos de ejercicio diario',
        'Muy activo y atlético para su tamaño',
        'Excelente para agility',
        'Disfruta de juegos interactivos'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Pelaje largo pero no requiere corte',
        'Baño cada 4-6 semanas',
        'Cuidado especial de orejas plumosas'
      ],
      health: [
        'Generalmente muy saludable',
        'Luxación de rótula ocasional',
        'Problemas dentales en perros pequeños',
        'Longevidad excepcional (12-16 años)'
      ]
    }
  },
  {
    id: 'cavalier-king-charles',
    name: 'Cavalier King Charles Spaniel',
    image: 'https://eu-central-1.graphassets.com/AnwjgMYRvQfWK3bRPjoq3z/resize=height:404,width:718/output=format:webp/enmhGtWTQhKYD2NPMNV9',
    size: 'Pequeño',
    temperament: 'Afectuoso, gentil y gracioso',
    description: 'El Cavalier King Charles Spaniel es un perro de compañía elegante y cariñoso. Son conocidos por su naturaleza dulce y expresión tierna, perfectos como perros de terapia.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1/2 a 1 taza de alimento',
        'Tendencia a obesidad, controlar porciones',
        'Evitar sobrealimentación por sus ojos suplicantes'
      ],
      exercise: [
        'Necesita 30-60 minutos de ejercicio diario',
        'Paseos regulares moderados',
        'Adaptable a nivel de actividad del dueño',
        'Disfruta tanto de juegos como de descanso'
      ],
      grooming: [
        'Cepillado 3-4 veces por semana',
        'Pelaje sedoso de longitud media',
        'Baño cada 4-6 semanas',
        'Limpieza regular de orejas largas'
      ],
      health: [
        'Propenso a enfermedad valvular mitral',
        'Siringomielia en algunos ejemplares',
        'Chequeos cardíacos regulares importantes',
        'Problemas oculares ocasionales'
      ]
    }
  },
  {
    id: 'australian-shepherd',
    name: 'Pastor Australiano',
    image: 'https://www.zooplus.es/magazine/wp-content/uploads/2021/05/Pastor-australiano.webp',
    size: 'Mediano',
    temperament: 'Inteligente, trabajador y leal',
    description: 'El Pastor Australiano es un perro pastor versátil y enérgico. A pesar de su nombre, la raza se desarrolló en Estados Unidos. Son extremadamente inteligentes y atléticos.',
    care: {
      feeding: [
        'Alimentar 2 veces al día',
        'Porción diaria: 1.5-2.5 tazas según actividad',
        'Alimento de alta calidad para perros activos',
        'Ajustar según nivel de ejercicio'
      ],
      exercise: [
        'Requiere 90-120 minutos de ejercicio diario',
        'Necesita trabajo mental constante',
        'Excelente para agility, flyball y pastoreo',
        'Puede desarrollar comportamientos destructivos sin ejercicio'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Pelaje doble de longitud media',
        'Muda moderada a abundante estacionalmente',
        'Baño cada 6-8 semanas'
      ],
      health: [
        'Generalmente saludable',
        'Displasia de cadera ocasional',
        'Problemas oculares hereditarios',
        'Sensibilidad a ciertos medicamentos (MDR1)'
      ]
    }
  },
  {
    id: 'boyero-bernes',
    name: 'Boyero de Berna',
    image: 'https://www.zooplus.es/magazine/wp-content/uploads/2021/02/Boyero-de-Berna.webp',
    size: 'Grande',
    temperament: 'Afectuoso, leal y tranquilo',
    description: 'El Boyero de Berna es un perro grande y robusto originario de Suiza. Son conocidos por su naturaleza gentil, lealtad extrema y hermoso pelaje tricolor.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día',
        'Porción diaria: 3-5 tazas de alimento de calidad',
        'Comida para razas grandes',
        'Suplementos para articulaciones recomendados'
      ],
      exercise: [
        'Necesita 60-90 minutos de ejercicio moderado',
        'Disfruta de climas fríos',
        'Paseos regulares y actividades familiares',
        'Evitar ejercicio excesivo en cachorros'
      ],
      grooming: [
        'Cepillado 2-3 veces por semana',
        'Pelaje largo tricolor denso',
        'Muda abundante especialmente en primavera',
        'Baño cada 6-8 semanas'
      ],
      health: [
        'Propenso a displasia de cadera y codo',
        'Cáncer es preocupación principal',
        'Torsión gástrica (bloat)',
        'Esperanza de vida corta (7-10 años)'
      ]
    }
  },
  {
    id: 'mastiff-ingles',
    name: 'Mastiff Inglés',
    image: 'https://www.zooplus.es/magazine/wp-content/uploads/2020/02/mast%C3%ADn-ingl%C3%A9s-768x511.webp',
    size: 'Grande',
    temperament: 'Gentil, digno y protector',
    description: 'El Mastiff Inglés es una de las razas más grandes y antiguas. A pesar de su tamaño imponente, son conocidos por su naturaleza gentil y cariñosa, especialmente con niños.',
    care: {
      feeding: [
        'Alimentar 2-3 veces al día',
        'Porción diaria: 6-8 tazas para razas gigantes',
        'Alimento específico para razas gigantes',
        'Control de peso para proteger articulaciones'
      ],
      exercise: [
        'Necesita 30-45 minutos de ejercicio moderado',
        'Evitar ejercicio intenso por su tamaño',
        'Paseos tranquilos regulares',
        'Cuidado con el calor por tamaño y hocico'
      ],
      grooming: [
        'Cepillado semanal',
        'Pelaje corto de fácil mantenimiento',
        'Limpieza de pliegues faciales regular',
        'Babeo abundante, limpieza frecuente'
      ],
      health: [
        'Propenso a displasia de cadera y codo',
        'Torsión gástrica (emergencia)',
        'Problemas cardíacos',
        'Esperanza de vida corta (6-10 años)'
      ]
    }
  }
];
