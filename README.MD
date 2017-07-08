Convert image to base64 with gulp

```
html:
<img src="/images/example.png"/>
to
<img src="data:image/png;base64,..."/>

css:
.example {
    background: url(/images/example.png) 0 0 no-repeat;
}
to
.example {
    background: url(data:image/png;base64,...) 0 0 no-repeat;
}
```

#### test
```
1. git clone https://github.com/manble/gulp-img2base64.git img2base64
2. cd img2base64
3. npm install
3. npm run test(gulp test)
```
