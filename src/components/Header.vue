<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Hank的家</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->

            <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
            <b-nav-item to="/">
            Home
            </b-nav-item>
            <b-nav-item to="/about">
            About
            </b-nav-item>
            <b-nav-item to="/login">
            Login
            </b-nav-item>
            </b-navbar-nav>
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">搜尋</b-button>
            </b-nav-form>

            <!-- <b-nav-item-dropdown text="語系" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">日文</b-dropdown-item>
            <b-dropdown-item href="#">繁體中文</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right> -->
            <!-- Using 'button-content' slot -->
            <!-- <template #button-content>
                <em>使用者</em>
            </template>
            <b-dropdown-item href="#">個人檔案</b-dropdown-item>
            <b-dropdown-item href="#">登出</b-dropdown-item>
            </b-nav-item-dropdown> -->
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style lang="scss" scoped>
    .nav-link{
        margin-right: 1rem;
        a{
            color:white;
        text-decoration: none;
        }
    }
</style>
