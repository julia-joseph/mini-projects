import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-collapse',
  templateUrl: './faq-collapse.component.html',
  styleUrls: ['./faq-collapse.component.scss'],
})
export class FaqCollapseComponent implements OnInit {
  items = [
    {
      question: 'Where do I fill in the form?',
      answer:
        "You can find the form under the dropdown menu from the home page. Hover over the section 'Registrations' and click on the option 'Apply'",
    },
    {
      question: 'How do I do the registration?',
      answer:
        "You can find the form under the dropdown menu from the home page. Hover over the section 'Registrations' and click on the option 'Apply'",
    },
    {
      question: 'When can I make the payments?',
      answer:
        "You can find the form under the dropdown menu from the home page. Hover over the section 'Registrations' and click on the option 'Apply'",
    },
    {
      question: "Who can I contact if I'm stuck",
      answer:
        "You can find the form under the dropdown menu from the home page. Hover over the section 'Registrations' and click on the option 'Apply'",
    },
    {
      question: 'What is the expected level of detail?',
      answer:
        "You can find the form under the dropdown menu from the home page. Hover over the section 'Registrations' and click on the option 'Apply'",
    },
    {
      question: 'Why do I need to go to the main portal first?',
      answer:
        "You can find the form under the dropdown menu from the home page. Hover over the section 'Registrations' and click on the option 'Apply'",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
