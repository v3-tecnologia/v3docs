---
title: "A obsessão pelo registro perfeito pode estar nos fazendo perder o risco real"
description: "Quando a classificação do evento vira prioridade, a gestão de risco perde contexto. Um olhar prático sobre DMS, falsos positivos e segurança contínua."
slug: registro-perfeito-risco-real
authors: [adriano, ana]
tags: [videotelemetria, IA, "inteligência de dados", "visão computacional", telemática, frotas]
---

Nos últimos anos, os sistemas de Driver Monitoring System (DMS) e as Dash Cams evoluíram de forma impressionante. Alcançamos a capacidade técnica de identificar dezenas de comportamentos do motorista: uso de celular, distração, fadiga, bocejos, olhos fechados, ausência do cinto, cigarro, entre muitos outros.

Contudo, essa evolução traz uma provocação crítica para a nossa indústria:

**Estamos tentando identificar eventos... ou estamos tentando evitar acidentes?**

Pode parecer uma diferença sutil, mas ela altera radicalmente a gestão da frota e a forma como interpretamos os dados.

## O paradoxo da classificação vs. a realidade do risco

O problema começa quando o evento passa a ser mais importante do que o comportamento.

Na rotina da videotelemetria, discussões sobre a rotulagem de um alerta tornaram-se comuns:

> "Isso não foi um evento de distração genérico, foi uso de celular."

> "Esse alerta foi classificado de forma incorreta."

Quando auditamos a gravação, porém, encontramos um motorista olhando repetidamente para baixo, retirando os olhos da via para manipular um aparelho.

Nesse contexto, cabe questionar:

- O que realmente colocava aquele motorista em risco?
- O nome do evento?
- Ou o fato de ele estar dirigindo distraído?

Do ponto de vista da gestão de risco, pouco importa se o algoritmo classificou aquele instante como "Uso de Celular", "Distração Visual" ou outra categoria semelhante. O risco continua exatamente o mesmo, pois o nível de exposição ao perigo e o potencial de severidade do acidente permanecem inalterados.

## Segurança é um fluxo contínuo, nunca acontece em um único frame

Existe uma tendência natural de fragmentar a análise em eventos estáticos, como se um único recorte representasse toda a verdade sobre aquele momento.

Entretanto, a condução é um processo contínuo e dinâmico. Um desvio pontual de olhar em um segundo isolado não define, por si só, o perfil de risco do condutor. O risco real reside na frequência, na duração e na combinação desses padrões ao longo do tempo.

O problema aparece quando começamos a conectar os pontos. Imagine um motorista que, nos últimos quinze minutos:

- apresentou diversos episódios de distração;
- realizou duas frenagens bruscas;
- fez mudanças de faixa agressivas;
- dirigia às duas horas da manhã;
- estava acima da velocidade média da frota.

Separadamente, talvez nenhum desses eventos justificasse uma intervenção.

Juntos, eles contam uma história completamente diferente.

## O falso positivo também precisa ser colocado em perspectiva

Falsos positivos em sistemas de fadiga são um tema recorrente na operação.

Um cenário frequente é o motorista perceber excesso de alertas, perder confiança no sistema e, em casos extremos, chegar a cobrir a câmera.

Essa discussão é extremamente válida.

Um sistema de IA, isoladamente, ainda não é perfeito.

Todo algoritmo possui falsos positivos e falsos negativos.

Mas existe um aspecto que recebe pouca atenção:

**O ser humano também não é um excelente avaliador do próprio comportamento** [1][2][3][4][5].

É muito comum um motorista afirmar categoricamente:

> "Eu não estava distraído."

Enquanto a gravação mostra diversos segundos consecutivos com os olhos fora da via.

Isso acontece porque distração não é apenas uma decisão consciente.

Ela pode ocorrer sem que o próprio condutor perceba.

Por isso, nem todo alerta contestado deve ser automaticamente considerado um falso positivo.

Assim como nem todo alerta emitido deve ser considerado uma verdade absoluta.

A resposta normalmente está no equilíbrio entre tecnologia, contexto operacional e análise humana.

Ao priorizar a busca pelo "registro perfeito", corremos o risco de transformar a videotelemetria em um exercício meramente burocrático de auditoria de dados, distanciando-nos do seu propósito primário: a preservação de vidas e do patrimônio.

**Estamos utilizando o DMS para gerenciar métricas ou para transformar a cultura de condução?**

---

## Referências

[1] Kruger, J., & Dunning, D. (1999). *Unskilled and unaware of it: How difficulties in recognizing one's own incompetence lead to inflated self-assessments.* Journal of Personality and Social Psychology, 77(6), 1121-1134. https://doi.org/10.1037/0022-3514.77.6.1121

[2] Nisbett, R. E., & Wilson, T. D. (1977). *Telling more than we can know: Verbal reports on mental processes.* Psychological Review, 84(3), 231-259. https://doi.org/10.1037/0033-295X.84.3.231

[3] Timothy D. Wilson, (2002). *Strangers to Ourselves: Discovering the Adaptive Unconscious* https://www.amazon.com.br/Strangers-Ourselves-Discovering-Adaptive-Unconscious/dp/0674013824

[4] Mynttinen, S., Sundstrom, A., Vissers, J., Koivukoski, M., Hakuli, K., & Keskinen, E. (2009). *Self-assessed driver competence among novice drivers - a comparison of driving test candidate assessments and examiner assessments in a Dutch and Finnish sample.* Journal of Safety Research, 40(4), 301-309. https://doi.org/10.1016/j.jsr.2009.04.006

[5] Dang, King, & Inzlicht, (2020). *Why Are Self-Report and Behavioral Measures Weakly Correlated?*. https://pubmed.ncbi.nlm.nih.gov/32160564/