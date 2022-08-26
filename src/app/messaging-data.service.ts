import { EventEmitter, Injectable } from '@angular/core';
import { Message } from 'src/message.model';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/user.model';

@Injectable({
  providedIn: 'root',
})
export class MessagingDataService {

  private senderMessages: Message[] = [];
  public sender: User;

  private userMessages: Message[] = [];
  public user: User;

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  /* dependency injection */
  constructor(
    private loggingSvce: LoggingService,
    private httpClient: HttpClient
  ) {
    loggingSvce.log('Messaging Data Service constructor completed');
  }

  /* return sender messages
    ===== BACKEND-LOGIC FOR GETTING SENDER MESSAGE =====
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-sender-messages")
    public List<Message> getSenderMessages() {
        return senderMessages;
    }
  */
  getSenderMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-sender-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice(); // store results into `senderMessages` variable
  }

  /* return user messages
    ===== BACKEND-LOGIC FOR GETTING USER MESSAGE =====
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/get-user-messages")
    public List<Message> getUserMessages() {
        return userMessages;
    }
  */
  getUserMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-user-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    return this.userMessages.slice();
  }

  /* add user messages
    ===== BACKEND-LOGIC FOR ADDING USER MESSAGE =====
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/add-user-message")
    public List<Message> addUserMessage(@RequestBody Message newMessage) {
        userMessages.add(newMessage);
        return userMessages;
    }
  */
  addUserMessage(newMessage: Message) {
    this.httpClient
      .post<Message[]>('http://localhost:8080/api/add-user-message', newMessage)
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  /* delete user messages
    ===== BACKEND-LOGIC FOR DELETING USER MESSAGE =====
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/api/conversations/{conversationId}/{sequenceId}")
    public List<Message> DeleteUserMessage(@PathVariable long conversationId, @PathVariable long sequenceId) {
      userMessages.removeIf(message -> (message.conversationId == conversationId && message.sequenceNumber == sequenceId));
      return this.userMessages;
    }
    =================================================
  */
  deleteUserMessage(message: Message) {
    const convID = message.conversationId;
    const sequenceNumber = message.sequenceNumber;
    this.httpClient
      .delete<Message[]>(
        `http://localhost:8080/api/conversations/${convID}/${sequenceNumber}`
      )
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
  }

}
