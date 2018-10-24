
import {assert} from "./test-config";
import { Component, Input } from "@angular/core";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { nsTestBedAfterEach, nsTestBedBeforeEach, nsTestBedRender } from "nativescript-angular/testing";
import {ItemsComponent} from "../item/items.component";
import {ItemService} from "../item/item.service";
import {ItemDetailComponent} from "../item/item-detail.component";
import "reflect-metadata";
import { AppComponent } from "../app.component";

describe("Itemlist tests", () => {
    
    let fixture: ComponentFixture<ItemsComponent>;
    let component: ItemsComponent;
    let itemService: ItemService;
    var itemComponent;
    
    beforeEach(nsTestBedBeforeEach([AppComponent,ItemsComponent,ItemDetailComponent],[ItemService])    
    );
    afterEach(nsTestBedAfterEach(false));

     
      
        it("First test check Items", async(() => {
        nsTestBedRender(ItemsComponent)
        .then((fixture: ComponentFixture<ItemsComponent>) => {
            const component = fixture.componentRef.instance;
            component.ngOnInit();            
            assert.equal(component.items.length, 22);
        });
    }));
});