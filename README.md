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

## Publiceren

Publiceren wordt gedaan door deIdee en wel op de volgende manier:

```shell
npm publish --access public
```
