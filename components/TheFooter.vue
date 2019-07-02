<template>
  <footer>
    <ul id="social-connect">
      <li class="social-connect--option email">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-connect--icon-logo"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" class=""></path></svg>
        </div>

        <nuxt-link to="/contact" focusable="false" class="contact" title="Contact me"><span>Email&nbsp;me</span></nuxt-link>
        
        <!-- <a href="http://cha.se.net/contact/" target="_blank" class="contact" title="Contact me"><span>Email&nbsp;me</span></a> -->
      </li>
      
      <li class="social-connect--option codepen">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-connect--icon-logo"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" class=""></path></svg>
        </div>
        
        <a href="https://codepen.io/chasebank/" target="_blank" class="codepen" title="View my CodePen Profile"><span>CodePen</span></a>
      </li>

      <li class="social-connect--option dev">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="social-connect--icon-logo"><path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg>
        </div>
        
        <a href="https://dev.to/chase" target="_blank" class="dev" title="View my DEV Profile"><span>DEV.to</span></a>
      </li>

      <li class="social-connect--option github">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="social-connect--icon-logo"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>
        </div>
        
        <a href="https://github.com/chasebank" target="_blank" class="github" title="View my GitHub Profile"><span>GitHub</span></a>
      </li>

      <li class="social-connect--option dribbble">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-connect--icon-logo"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" class=""></path></svg>
        </div>
        
        <a href="https://dribbble.com/chasebank" target="_blank" class="linkedin" title="View my Dribbble Profile"><span>Dribbble</span></a>
      </li>
      
      <li class="social-connect--option twitter">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="social-connect--icon-logo"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
        </div>
        
        <a href="https://twitter.com/chase_whiteside" target="_blank" class="twitter" title="View my Twitter Profile"><span>Twitter</span></a>
      </li>

      <!-- <li class="social-connect--option linkedin">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="social-connect--icon-logo"><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z" class=""></path></svg>
        </div>
        
        <a href="https://www.linkedin.com/in/chasewhiteside" target="_blank" class="linkedin" title="View my LinkedIn Profile"><span>LinkedIn</span></a>
      </li> -->
      
<!--       <li class="social-connect--option behance">
        <div class="social-connect--icon">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
            <path class="social-connect--icon-squircle" d="M45 90c19.72 0 30.68 0 37.84-7.16C90 75.68 90 64.72 90 45s0-30.68-7.16-37.84C75.68 0 64.72 0 45 0 25.28 0 14.32 0 7.16 7.16 0 14.32 0 25.28 0 45s0 30.68 7.16 37.84C14.32 90 25.28 90 45 90z"/>
          </svg>
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="social-connect--icon-logo"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" class=""></path></svg>
        </div>
        
        <a href="https://www.behance.net/chasebank" target="_blank" class="behance" title="View my Bēhance Profile"><span>Bēhance</span></a>
      </li> -->
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: magenta;
  padding-top: $largePadding;
  padding-bottom: $largePadding;
  // margin-top: calc(#{$mediumPadding } * -1);
  // position: absolute;
  // bottom: 0;
  width: var(--innerVW);

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(~assets/personal-site--footer.png);
  background-size: cover;
  background-position: top right;
}

.transition-footer {
  position: fixed;
  transition-property: transform, width;
  transition-duration: $transitionDurationForDebugging;
}

#social-connect {
  width: 100%;
  list-style: none;
  margin-top: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: space-evenly;
}

.social-connect--option {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @include responsive-property("font-size", 15px, 18px);

  display: flex;
  align-items: center;
  z-index: 1;
  
  &:hover {
    .social-connect--icon:after {
      animation: socialIconHover 1s forwards
    }
  }
  
  a {
    position: relative;
    font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: .5em .9em .5em 1em;
    margin-left: -.8rem;
    
    &:before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
}

@keyframes socialIconHover {
  0% {
    opacity: 1;
    transform: translate3d(-50%,-50%,0) scale(1)
  }
  
  100% {
    opacity: 0;
    transform: translate3d(-50%,-50%,0) scale(1.8)
  }
}

.social-connect--icon {
  position: relative;
  margin-right: .25rem;
  z-index: 1;
  
  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 90%;
    height: 90%;
    background-color: red;
    border-radius: .4em;
    z-index: -1;
  }
  
  svg {
    display: block;
    height: 1.5em;
    width: auto;
  }
}

.social-connect--icon-squircle {
  fill: white;
}

.social-connect--icon-logo {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: .6em;
}

.social-connect--icon-squircle,
.social-connect--icon-logo path {
  transition: fill .3s;
}


@mixin socialConnectOptionStyles($bgColor,$iconColor) {
  .social-connect--icon:after {
    background-color: $bgColor
  }
  
  .social-connect--icon-squircle {
    fill: $bgColor
  }
  .social-connect--icon-logo path {
    fill: $iconColor
  }
  
  a:before {
    background-color: $bgColor;
    opacity: .2;
    transition: opacity .3s
  }
  
  &:hover {
    .social-connect--icon-squircle {
      fill: $iconColor
    }
    .social-connect--icon-logo path {
      fill: $bgColor
    }
    a:before {
      opacity: 1;
    }
  }
}

.email {
  @include socialConnectOptionStyles(#093c4a, #d2f8ff);
  
  a:before {
    opacity: .35
  }
}

.codepen {
  @include socialConnectOptionStyles(#AE63E4, white)
}

.dev {
  @include socialConnectOptionStyles(white, black);

  .social-connect--icon-logo {
    font-size: .8em;
  }

  a{
    transition: color .3s
  }
  
  a:before {
    opacity: .15
  }
  
  &:hover a{
    color: black
  }
}

.twitter {
  @include socialConnectOptionStyles(white, #2caae1);
  
  a{
    transition: color .3s
  }
  
  a:before {
    opacity: .15
  }
  
  &:hover a{
    color: #2caae1
  }
}

.github {
  @include socialConnectOptionStyles(#76c85a, white)
}

.dribbble {
  @include socialConnectOptionStyles(#ea4c89, white)
}

.linkedin {
  @include socialConnectOptionStyles(#2caae1, white)
}

.behance {
  @include socialConnectOptionStyles(#237ffc, white)
}
</style>
