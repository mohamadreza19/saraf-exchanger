export interface Ticket {
  ticketNumber: string;
  subject: string;
  priority: 'بالا' | 'متوسط' | 'کم';
  assignTo: string;
}
