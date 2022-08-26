import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HighlightDirective } from './highlight.directive';
import { LoggingService } from './logging.service';
import { MessagingDataService } from './messaging-data.service';
import { MessageCountComponentComponent } from './message-count-component/message-count-component.component';
import { ApplicationComponentComponent } from './application-component/application-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ConversationControlComponentComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    SendMessageComponentComponent,
    ContactListComponentComponent,
    ContactComponentComponent,
    HighlightDirective,
    MessageCountComponentComponent,
    ApplicationComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [LoggingService, MessagingDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
