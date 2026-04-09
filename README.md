# TLAMATINI — Requisitos Funcionales

> Plataforma web para mujeres en tecnología en México  
> Documento de requisitos: Módulo de Perfiles y Motor de Matching  

---

## Módulo 1 — Perfiles de Usuarias con Habilidades y Portafolio

### Descripción General

El perfil es la identidad digital de cada usuaria dentro de Tlamatini. Permite que reclutadores, mentoras y la comunidad conozcan su trayectoria, habilidades técnicas y proyectos. Es la base sobre la que opera el motor de matching.

---

### Registro y creación de perfil

- La usuaria puede registrarse mediante correo electrónico y contraseña.
- El sistema debe enviar un correo de verificación al registrarse.
- La usuaria puede iniciar sesión con Google (OAuth 2.0).
- Al completar el registro, el sistema guía a la usuaria a través de un onboarding para llenar su perfil paso a paso.

---

### Información personal y profesional

- La usuaria puede ingresar nombre, foto de perfil, ciudad, y una biografía corta (máx. 300 caracteres).
- La usuaria puede declarar su nivel de experiencia: Junior, Mid-level, Senior.
- La usuaria puede indicar su área de especialización (ej. Frontend, Backend, Data Science, UX/UI, QA, DevOps, Product).
- La usuaria puede declarar si está abierta a oportunidades laborales (toggle: activa / pasiva / no disponible).
- La usuaria puede indicar modalidades de trabajo preferidas: remoto, híbrido, presencial.
- La usuaria puede indicar rango salarial esperado (campo opcional y privado por defecto).

---

### Gestión de habilidades

- La usuaria puede agregar habilidades técnicas desde un catálogo predefinido (ej. Python, React, SQL, Figma).
- La usuaria puede agregar habilidades que no estén en el catálogo como texto libre.
- Cada habilidad puede tener un nivel de dominio asociado: Básico, Intermedio, Avanzado.
- La usuaria puede reordenar sus habilidades por relevancia.
- El sistema muestra las habilidades en el perfil público como etiquetas visuales.

---

### Portafolio de proyectos

- La usuaria puede agregar proyectos con: nombre, descripción (máx. 500 caracteres), URL, imagen de portada, y tecnologías utilizadas.
- La usuaria puede vincular su perfil de GitHub para importar repositorios destacados.
- La usuaria puede vincular su perfil de LinkedIn.
- Los proyectos se muestran en el perfil público como tarjetas con imagen y descripción.
- La usuaria puede marcar proyectos como destacados para que aparezcan primero.
- El sistema admite hasta 10 proyectos en el MVP.

---

### Experiencia y formación

- La usuaria puede agregar experiencias laborales previas con: empresa, cargo, periodo y descripción breve.
- La usuaria puede agregar formación académica y/o bootcamps.
- La usuaria puede agregar certificaciones con nombre, institución y URL de verificación (opcional).

---

### Visibilidad y privacidad del perfil

- El perfil puede configurarse como: público, solo comunidad Tlamatini, o privado.
- El rango salarial es privado por defecto y solo visible para empresas verificadas.
- La usuaria puede ver un preview de cómo luce su perfil desde la perspectiva de un reclutador.

---

### Requisitos No Funcionales — Módulo de Perfiles

- El perfil debe cargar en menos de 2 segundos en conexiones 4G.
- El formulario de perfil debe ser accesible (WCAG 2.1 AA), con etiquetas correctas y navegación por teclado.
- La foto de perfil debe comprimirse automáticamente al subirla (máx. 500 KB).
- El perfil debe ser responsive y funcionar correctamente en móvil, tablet y escritorio.

---

## Módulo 2 — Motor de Matching con Oportunidades Laborales

### Descripción General

El motor de matching conecta de forma inteligente los perfiles de las usuarias con oportunidades laborales publicadas por empresas aliadas. El algoritmo considera habilidades, experiencia, modalidad y preferencias personales para generar recomendaciones relevantes.

---

### Publicación de oportunidades (lado empresa)

- Las empresas verificadas pueden publicar vacantes con: título, descripción, habilidades requeridas, nivel de experiencia, modalidad, rango salarial (opcional) y fecha límite.
- Las empresas pueden marcar habilidades como requeridas u opcionales.
- El sistema valida que la vacante tenga al menos: título, descripción, área y nivel de experiencia.
- Las vacantes tienen un estado: activa, pausada o cerrada.
- Las empresas pueden ver cuántas usuarias hicieron match con su vacante (métrica agregada, sin datos personales).

---

### Algoritmo de matching

- El sistema calcula un porcentaje de compatibilidad entre el perfil de la usuaria y cada vacante activa.
- Los criterios de matching incluyen: habilidades técnicas, nivel de experiencia, área de especialización, modalidad de trabajo preferida y disponibilidad.
- Las habilidades marcadas como requeridas por la empresa tienen mayor peso en el cálculo.
- El sistema prioriza oportunidades donde la usuaria cumple al menos el 60% de los requisitos.
- El algoritmo se recalcula automáticamente cuando la usuaria actualiza su perfil o cuando se publica una nueva vacante.
- El motor debe retornar resultados en menos de 3 segundos.

---

### Exploración de oportunidades para la usuaria

- La usuaria accede a una vista de oportunidades ordenadas por porcentaje de compatibilidad (mayor a menor).
- Cada tarjeta de oportunidad muestra: título, empresa, modalidad, porcentaje de match y habilidades coincidentes resaltadas.
- La usuaria puede filtrar oportunidades por: área, modalidad, nivel de experiencia y rango salarial.
- La usuaria puede guardar vacantes en una lista de favoritos.
- La usuaria puede ver el detalle completo de la vacante en una vista dedicada.
- La usuaria puede ver qué habilidades de la vacante no tiene aún (brecha de habilidades), como incentivo de aprendizaje.

---

### Postulación y seguimiento

- La usuaria puede postularse a una vacante con un clic, enviando su perfil Tlamatini a la empresa.
- La usuaria puede adjuntar un mensaje personalizado al momento de postularse (opcional, máx. 300 caracteres).
- El sistema notifica a la usuaria por correo cuando se postula exitosamente.
- La usuaria tiene un panel de seguimiento con sus postulaciones y su estado: enviada, en revisión, entrevista, rechazada, oferta.
- La empresa puede actualizar el estado de cada postulación desde su panel.
- El sistema notifica a la usuaria por correo cuando su estado cambia.

---

### Métricas del motor de matching (para el dashboard interno)

- El sistema registra el número de matches generados por semana.
- El sistema registra la tasa de postulación (usuarias que ven una vacante vs. las que se postulan).
- El sistema registra el número de colocaciones confirmadas (usuaria contratada).
- El dashboard interno muestra el NPS del proceso de búsqueda de empleo.

---

### Requisitos No Funcionales — Motor de Matching

- El algoritmo debe escalar para soportar hasta 10,000 perfiles activos en el MVP sin degradación de rendimiento.
- Los datos de postulación y perfiles deben estar encriptados en reposo y en tránsito (HTTPS, AES-256).
- El sistema debe cumplir con la Ley Federal de Protección de Datos Personales (LFPDPPP) de México.
- Las recomendaciones no deben discriminar por factores no relacionados al perfil técnico.

