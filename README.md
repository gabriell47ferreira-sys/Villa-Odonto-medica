# Site Institucional — Clínica Villa Odonto Médica 🦷🩺

Website institucional moderno, responsivo e profissional desenvolvido para a **Clínica Villa Odonto Médica**, localizada no bairro Kennedy em Caruaru – PE.

---

## 🌟 Principais Recursos e Diferenciais

- **Identidade Visual Autêntica**: Baseada estritamente no logotipo oficial e presença no Instagram da clínica (`@villaodontomedica`), utilizando tons de azul cerúleo/ciano médico (`#009FE3`), azul marinho elegante (`#0F2B48`), branco e toques acolhedores de areia suave.
- **Estrutura Completa de 10 Seções**:
  1. **Header**: Logotipo com cruz médica oficial, navegação fluida e botão de WhatsApp; menu compacto responsivo para celular.
  2. **Hero Principal**: Headline acolhedora, botões de ação direta, indicadores de autoridade e fotografia de alta resolução.
  3. **Apresentação da Clínica**: Pilares de humanização, cuidado individualizado, biossegurança rigorosa e compromisso bucal.
  4. **Tratamentos Odontológicos**: Cards modernos com ícones dedicados e botões diretos de consulta no WhatsApp para cada atendimento.
  5. **Conheça Nossa Clínica**: Galeria visual com estrutura, ambiente climatizado e esterilização.
  6. **Profissionais**: Estrutura pronta e tipada em código, mantida oculta na versão pública inicial por conformidade ética até o envio dos nomes e CROs.
  7. **Avaliações do Google**: Prova social transparente com link direto para o perfil oficial no Google Maps.
  8. **Localização**: Endereço confirmado na Rua Marieta Líra de Azevedo 50 (Kennedy), mapa incorporado do Google Maps com coordenadas exatas (`-8.2818749, -35.9985075`) e botão de rotas "Como chegar".
  9. **Agendamento**: Seção de conversão de alto impacto direcionando para o WhatsApp com mensagem pré-formatada.
  10. **Rodapé Completo**: Dados de contato, horários, endereço, redes sociais e navegação.
- **Botão Flutuante de WhatsApp**: Acesso rápido com tooltip amigável sem cobrir conteúdos importantes.
- **SEO Local & Schema.org**: Metadados Open Graph e marcação estruturada `Dentist` / `LocalBusiness` configurada para Caruaru - PE.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** (build ultrarrápido)
- **Tailwind CSS v4** (estilização moderna e customizada)
- **Lucide React** (ícones consistentes e elegantes)

---

## 🚀 Como Executar o Projeto

No terminal, na pasta do projeto:

```bash
# 1. Instalar as dependências (já instaladas)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Gerar a versão de produção otimizada
npm run build

# 4. Pré-visualizar a versão de produção
npm run preview
```

---

## ⚙️ Como Atualizar os Dados da Clínica

Todas as informações da clínica estão centralizadas em um único arquivo de fácil edição:

📁 **`src/data/clinicData.ts`**

Neste arquivo você pode atualizar facilmente:
- **Número do WhatsApp**: Altere `clinicData.contact.whatsappRawNumber` (ex: `"5581999998888"`).
- **Mensagem padrão**: Altere `clinicData.contact.defaultMessage`.
- **Endereço e Referências**: Altere `clinicData.address`.
- **Horários de Atendimento**: Altere `clinicData.businessHours`.
- **Tratamentos**: Adicione ou edite itens no array `confirmedTreatments`.
- **Equipe Médica / Dentistas**: Quando os nomes e registros de CRO forem fornecidos, preencha o array `clinicProfessionals` e altere `showProfessionals: true`.
