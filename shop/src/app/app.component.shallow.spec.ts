import { TestBed, ComponentFixture, ComponentFixtureAutoDetect, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective } from '../test/testing-services/router-stubs';

let component: AppComponent,
    fixture: ComponentFixture<AppComponent>;

describe('AppComponent (Shallow)', () => {
  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
          RouterLinkStubDirective
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
      .compileComponents();
  }));

  let links: RouterLinkStubDirective[],
      linkDes: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

    links = linkDes.map(d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('Can get RouterLinks from template', () => {
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[0].linkParams).toBe('/products', '1st link should go to Products');
    expect(links[1].linkParams).toBe('/cart', '2nd link should go to Cart');
    expect(links[2].linkParams).toBe('/admin', '3nd link should go to Admin');
  });

  it('Can click Products link in template', () => {
    const productLinkDes = linkDes[0],
          productLink = links[0];

    expect(productLink.navigatedTo).toBeNull('link should not have navigated yet');

    productLinkDes.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(productLink.navigatedTo).toBe('/products');
  });
});
