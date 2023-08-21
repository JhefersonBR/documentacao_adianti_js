## Repositório destinado à documentação das funções javascript do adianti

### Como contribuir

Para contribuir com a documentação de funções é muito simples

*   Primeiro crie um fork deste projeto
*   Depois edite os arquivos js da pasta compoentes ou o proprio arquivo adianti.js, adicionando os comentários conforme as regras do [JsDoc](https://jsdoc.app/)
*   Faça um pull request com as suas alterações para este repositório

### Arquivos e Pastas

*   Adianti.js - Arquivo com as funções globais do adianti
*   components - Pasta com os arquivos JS dos componentes do adianti
*   docs - Pasta gerada com a documentação dos arquivos js

Para visaulizar a documentação acesse: [https://jhefersonbr.github.io/documentacao_adianti_js](https://jhefersonbr.github.io/documentacao_adianti_js)

#### Exemplo de documentação de função:

```javascript
/**
 * Desabilita o TArrowStep
 * @function
 * @param {string} name - Nome do TArrowStep
 */
function tarrowstep_disable_field(name)
{
    $(`.arrow_steps_${name}`).addClass('disabled');
}
```

É muito importante utilzar o `@function` pois sem ele o gerador de documentação pode não ver a função e não inserir a mesma na documentação