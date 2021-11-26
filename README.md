# ![desass](https://deidee.com/logo.svg?str=deSass)

## Magische kolommen

Geïnspireerd door _Bootstrap_ en gebaseerd op _deFlex_, kan _deSass_ kolommen met arbitraire breedtes maken. Je zet er een breuk in en _deSass_ berekent niet alleen de breedte in procenten, maar groepeert het direct met kolommen van dezelfde breedte.

Het volgende voorbeeld (waarbij het gaat om de functie `column()`; de klassenamen zijn geen onderdeel van _deSass_):

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

Op deze manier kunnen ook meer creatieve en complexe kolommen worden gecreëerd, zoals dit voorbeeld van de gulden snede:

````scss
@use "sass:math";

$phi: math.div(math.sqrt(5) + 1, 2);

.golden-ratio-a {
  @include column(1 / $phi);
}

.golden-ratio-b {
  @include column(1 - 1 / $phi);
}

````

## Toegankelijkheidscontroles

deSass kan de contrastratio tussen twee kleuren (bijvoorbeeld een tekstkleur en een achtergrondkleur) berekenen en vervolgens toetsen of deze aan de richtlijnen van [WCAG 2.1](https://www.w3.org/TR/WCAG21/) (niveau AA of AAA) voldoet.

Optioneel kan er een corps worden meegegeven, waarbij ``24px`` of groter wordt gezien als _large type_ (waarvoor andere regels gelden).

```scss
@debug get-color-luminance(#2269ca); // 0.1470749981
@debug get-color-contrast-ratio(#2269ca, white); // 5.3279208935
@debug get-color-contrast-ratio(#2269ca, black); // 3.9414999621
@debug get-color-contrast-ratio(#2269ca, blue); // 1.6127250254
@debug is-wcag(#2269ca, white); // True!
@debug is-wcag-aaa(#2269ca, white); // False. :(
@debug is-wcag-aaa(#2269ca, white, 32px); // True again. :)
```

_Sinds v0.2_

## SVG als achtergrondafbeelding

Stel je hebt de volgende, [eenvoudige hamburger](https://gist.github.com/acjbizar/7f1f1858a661029ea027bdeaea013944):

```svg
<svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="4"/>
    <rect y="8" width="100%" height="4"/>
    <rect y="16" width="100%" height="4"/>
</svg>
```

Met deSass kun je deze in je stylesheet gebruiken zonder de afbeelding apart te hoeven hosten en wel op de volgende manier:

```scss
.hamburger {
  background-image: inline-svg('<svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="4"/><rect y="8" width="100%" height="4"/><rect y="16" width="100%" height="4"/></svg>');
}
```

Je kunt de XML op deze manier dus direct in de Sass plaatsen.

Op deze manier kun je zelfs je Sass-variabelen (of andere Sass-functies) gebruiken in je SVG. Voorbeeld:

```scss
$hamburger-color: #2269ca;

.hamburger {
  background-image: inline-svg('<svg fill="#{$hamburger-color}" width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="4"/><rect y="8" width="100%" height="4"/><rect y="16" width="100%" height="4"/></svg>');
}

/*
.hamburger {
  background-image: url("data:image/svg+xml,%3Csvg%20fill%3D%22%232269ca%22%20width%3D%2240%22%20height%3D%2220%22%20viewBox%3D%220%200%2040%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%224%22%2F%3E%3Crect%20y%3D%228%22%20width%3D%22100%25%22%20height%3D%224%22%2F%3E%3Crect%20y%3D%2216%22%20width%3D%22100%25%22%20height%3D%224%22%2F%3E%3C%2Fsvg%3E");
}
*/
```
Als je de data-URI, om wat voor reden dan ook, los wilt hebben kan dat ook:

```scss
$hamburger-image: inline-svg-url('<svg fill="#{$hamburger-color}" width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="4"/><rect y="8" width="100%" height="4"/><rect y="16" width="100%" height="4"/></svg>');
```

Let op: deze techniek is niet aangeraden bij complexe SVG en niet bruikbaar als individuele onderdelen geanimeerd moeten worden.

## Installatie

```shell
npm install --save-dev @deidee/desass
```

## Publiceren

Publiceren wordt gedaan door deIdee en wel op de volgende manier:

```shell
npm publish --access public
```
