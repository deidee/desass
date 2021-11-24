# ![desass](https://deidee.com/logo.svg?str=deSass)

## Magische kolommen

```SCSS
.col-1of2 {
  @include column(1/2);
}

.col-2of4 {
  @include column(2/4);
}

.col-3of4 {
  @include column(3/4);
}
```

Produceert de volgende output:

```CSS
.col-1of2, .col-2of4 {
  flex: 0 0 auto;
  width: 50%;
}

.col-3of4 {
  flex: 0 0 auto;
  width: 75%;
}
```

## Toegankelijkheidscontroles

deSass kan de contrastratio tussen twee kleuren (bijvoorbeeld een tekstkleur en een achtergrondkleur) berekenen en vervolgens toetsen of deze aan de richtlijnen van [WCAG 2.1](https://www.w3.org/TR/WCAG21/) (niveau AA of AAA) voldoet.

```scss
@debug get-color-luminance(#2269ca); // 0.1470749981
@debug get-color-contrast-ratio(#2269ca, white); // 5.3279208935
@debug get-color-contrast-ratio(#2269ca, black); // 3.9414999621
@debug get-color-contrast-ratio(#2269ca, blue); // 1.6127250254
@debug is-wcag(#2269ca, white); // True!
@debug is-wcag-aaa(#2269ca, white); // False. :(
```

_Sinds v0.2_

## Installatie

```shell
npm install --save-dev @deidee/desass
```

## Publiceren

Publiceren wordt gedaan door deIdee en wel op de volgende manier:

```shell
npm publish --access public
```
