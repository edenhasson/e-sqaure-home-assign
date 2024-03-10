import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WelcomeScreenComponent} from './components/welcome-screen/welcome-screen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPageComponent} from './components/search-page/search-page.component';
import {SearchInputComponent} from './components/search-input/search-input.component';
import {SearchContainerComponent} from './components/search-container/search-container.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule, NgbNav, NgbNavItem} from '@ng-bootstrap/ng-bootstrap';
import {WishlistInputComponent} from "./components/wishlist-input/wishlist-input.component";
import {WishlistPageComponent} from './components/wishlist-page/wishlist-page.component';
import {UsernameGuard} from "./guards/username-guard.service";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    SearchPageComponent,
    SearchInputComponent,
    SearchContainerComponent,
    BookCardComponent,
    WishlistInputComponent,
    WishlistPageComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeScreenComponent},
      {path: 'search', component: SearchPageComponent, canActivate: [UsernameGuard]},
      {path: 'wishlist', component: WishlistPageComponent, canActivate: [UsernameGuard]}
    ]),
  ],
  providers: [NgbNavItem, NgbNav],
  bootstrap: [AppComponent],
})
export class AppModule {
}
