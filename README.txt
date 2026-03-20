Versão limpa do site

O que foi removido:
- Google Tag Manager / GA / gtag
- Meta Pixel / Facebook events
- Microsoft Clarity
- Segment
- Amplitude
- Customer.io
- scripts e estilos injetados pelo navegador no momento em que a página foi salva
- sobras de runtime do Google Maps dentro do HTML

Estrutura:
- index.html
- assets/

Observações:
- Mantive o visual e os scripts funcionais do site.
- Alguns fundos/imagens que no HTML original apontavam para /static/... foram convertidos para URLs completas do domínio original para continuar carregando fora do ambiente antigo.
- Os links do conteúdo continuam apontando para o site original, porque essa limpeza foi focada em remover trackers e sobras, sem alterar a navegação/conteúdo.
