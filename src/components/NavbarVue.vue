<template lang="">
  <nav className="navbar">
    <div className="nav-center">
      <router-link to="/">
        <h1 className="logo header">Anime</h1>
      </router-link>
      <ul className="nav-links">
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li>
          <router-link to="/watchlist">Watchlist</router-link>
        </li>
        <li>
          <router-link to="/LoginReg">Login/Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
<style>
/* 
====== 
Navbar
====== */

.navbar {
  background: var(--mainWhite);
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--primaryColor);
  box-shadow: var(--lightShadow);
}
.nav-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
}
.nav-links {
  display: flex;
  align-items: center;
}
.nav-links a {
  text-transform: capitalize;
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.2rem;
  padding: 0.25rem 0.5rem;
  transition: var(--mainTransition);
}
.nav-links a:hover {
  color: var(--primaryColor);
}
.logo {
  width: 12rem;
}
</style>
