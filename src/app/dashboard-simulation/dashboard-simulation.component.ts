import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-simulation',
  templateUrl: './dashboard-simulation.component.html',
  styleUrls: ['./dashboard-simulation.component.scss']
})
export class DashboardSimulationComponent implements OnInit {
  stressInnerDoughnut: any;
  stressOuterDoughnut: any;
  engagementInnerDoughnut: any;
  engagementOuterDoughnut: any;
  happinessInnerDoughnut: any;
  happinessOuterDoughnut: any;
  stressDummyVal = 67;
  engagementDummyVal = 41;
  happinessDummyVal = 26;
  activeUsersDummyVal = 75;
  isDoughnutsDataLoading: boolean;

  constructor() {
    this.isDoughnutsDataLoading = true;
  }

  ngOnInit() {
    this.setupDoughnut();
  }

  setupDoughnut() {
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        const width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + 'rem sans-serif';
        ctx.textBaseline = 'middle';
        // const text = chart.config.options.elements.center.text,
        //   textX = Math.round((width - ctx.measureText(text).width) / 2),
        //   textY = height / 2;
        // ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });

// chart1
    const stressInitData = {
      labels: ['Stressed', 'Not Stressed'],
      datasets: [
        {
          data: [this.stressDummyVal, (100 - this.stressDummyVal)],
          backgroundColor: ['#e53935', '#bdbdbd'],
          hoverBackgroundColor: ['#e53935', '#bdbdbd']
        }]
    };
    const stressGenderInitData = {
      labels: ['Red', 'Blue', 'Undefined'],
      datasets: [
        {
          data: [40, 20, 40],
          backgroundColor: ['#FF6384', '#36A2EB', 'transparent'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', 'transparent']
        }]
    };

    const engagementInitData = {
      labels: ['Stressed', 'Not Stressed'],
      datasets: [
        {
          data: [this.engagementDummyVal, 100 - this.engagementDummyVal],
          backgroundColor: ['#fbc02d', '#bdbdbd'],
          hoverBackgroundColor: ['#fbc02d', '#bdbdbd']
        }]
    };
    const engagementGenderInitData = {
      labels: ['Red', 'Blue', 'Undefined'],
      datasets: [
        {
          data: [30, 30, 40],
          backgroundColor: ['#FF6384', '#36A2EB', 'transparent'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', 'transparent']
        }]
    };
    const happinessInitData = {
      labels: ['Stressed', 'Not Stressed'],
      datasets: [
        {
          data: [this.happinessDummyVal, 100 - this.happinessDummyVal],
          backgroundColor: ['#4caf50', '#bdbdbd'],
          hoverBackgroundColor: ['#4caf50', '#bdbdbd']
        }]
    };
    const happinessGenderInitData = {
      labels: ['Red', 'Blue', 'Undefined'],
      datasets: [
        {
          data: [20, 20, 80],
          backgroundColor: ['#FF6384', '#36A2EB', 'transparent'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', 'transparent']
        }]
    };
    const activeUsersInitData = {
      labels: ['Stressed', 'Not Stressed'],
      datasets: [
        {
          data: [this.activeUsersDummyVal, 100 - this.activeUsersDummyVal],
          backgroundColor: ['#283593', '#bdbdbd'],
          hoverBackgroundColor: ['#283593', '#bdbdbd']
        }]
    };
    const data2 = {
      labels: ['Red', 'Blue', 'Undefined'],
      datasets: [
        {
          data: [43, 26, 31],
          backgroundColor: ['#FF6384', '#36A2EB', 'transparent'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', 'transparent']
        }]
    };

    this.stressInnerDoughnut = new Chart('doughnut1', {
      type: 'doughnut',
      data: stressInitData,
      options: {
        responsive: false,
        elements: {arc: {borderWidth: 0}},
        cutoutPercentage: 85,
        legend: {
          display: false
        }
      }
    });
    this.stressOuterDoughnut = new Chart('doughnut2', {
      type: 'doughnut',
      data: stressGenderInitData,
      options: {
        responsive: false,
        elements: {arc: {borderWidth: 0}},
        cutoutPercentage: 95,
        legend: {
          display: false
        }
      }
    });
    this.engagementInnerDoughnut = new Chart('doughnut3', {
      type: 'doughnut',
      data: engagementInitData,
      options: {
        responsive: false,
        elements: {arc: {borderWidth: 0}},
        cutoutPercentage: 85,
        legend: {
          display: false
        }
      }
    });
    this.engagementOuterDoughnut = new Chart('doughnut4', {
      type: 'doughnut',
      data: engagementGenderInitData,
      options: {
        responsive: false,
        elements: {arc: {borderWidth: 0}},
        cutoutPercentage: 95,
        legend: {
          display: false
        }
      }
    });
    this.happinessInnerDoughnut = new Chart('doughnut5', {
      type: 'doughnut',
      data: happinessInitData,
      options: {
        responsive: false,
        elements: {arc: {borderWidth: 0}},
        cutoutPercentage: 85,
        legend: {
          display: false
        }
      }
    });
    this.happinessOuterDoughnut = new Chart('doughnut6', {
      type: 'doughnut',
      data: happinessGenderInitData,
      options: {
        responsive: false,
        elements: {arc: {borderWidth: 0}},
        cutoutPercentage: 95,
        legend: {
          display: false
        }
      }
    });
    this.isDoughnutsDataLoading = false;
  }
}
