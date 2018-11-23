import {Component, OnInit, Renderer, ViewChild} from '@angular/core';
import {ActionCableService} from '../providers/action-cable.service';
import {state, style, transition, trigger, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-dashboard-simulation',
  templateUrl: './dashboard-simulation.component.html',
  styleUrls: ['./dashboard-simulation.component.scss']
})
export class DashboardSimulationComponent implements OnInit {
  @ViewChild('animateNumber') animateNumber;
  liveData;
  dataEmpty = true;
  stressInnerDoughnut: any;
  stressOuterDoughnut: any;
  engagementInnerDoughnut: any;
  engagementOuterDoughnut: any;
  happinessInnerDoughnut: any;
  happinessOuterDoughnut: any;
  // stress
  stressPercentageAll;
  stressPercentageFemale;
  stressPercentageMale;
  stressValAll;
  stressValFemale;
  stressValMale;
  // engagement
  engagementPercentageAll;
  engagementPercentageFemale;
  engagementPercentageMale;
  engagementValAll;
  engagementValFemale;
  engagementValMale;
  // happiness
  happinessPercentageAll;
  happinessPercentageFemale;
  happinessPercentageMale;
  happinessValAll;
  happinessValFemale;
  happinessValMale;
  // active users
  activeUsersValAll;
  activeUsersFemale;
  activeUsersMale;
  isDoughnutsDataLoading: boolean;
  stressLabel = ['Stressed', 'Not Stressed'];
  stressBgColor = ['#e53935', '#bdbdbd'];
  genderLabel = ['Male', 'Female', 'erm'];
  genderBgColor = ['#36A2EB', '#FF6384', 'transparent'];
  engagementLabel = ['Engaged', 'Not Engaged'];
  engagementBgColor = ['#fbc02d', '#bdbdbd'];
  happinessLabel = ['Happy', 'Not Happy'];
  happinessBgColor = ['#4caf50', '#bdbdbd'];
  stressFemaleLegend;
  stressMaleLegend;
  engagedFemaleLegend;
  engagedMaleLegend;
  happinessFemaleLegend;
  happinessMaleLegend;

  constructor(actionCable: ActionCableService,
              public renderer: Renderer) {
    this.isDoughnutsDataLoading = true;
    actionCable.establishConnection();
    actionCable.cable.subscriptions.create({
      channel: 'LiveResultChannel',
    }, {
      connected: () => {
        console.log('Connected to simulation channel');
      },
      disconnected: () => {
        console.log('disconnected from simulation channel');
      },
      received: (data) => {
        console.log('received data');
        console.log(data);
        this.liveData = data.payload;
        if (data) {
          this.dataEmpty = false;
          this.animate();
          this.activeUsersValAll = this.liveData.total_visitor;
          this.activeUsersFemale = this.liveData.percent_visitor_female;
          this.activeUsersMale = this.liveData.percent_visitor_male;
          this.stressValAll = this.liveData.total_stressed;
          this.stressPercentageAll = this.liveData.percent_stressed;
          this.stressPercentageFemale = this.liveData.percent_stressed_female;
          this.stressPercentageMale = this.liveData.percent_stressed_male;
          this.engagementValAll = this.liveData.total_engaged;
          this.engagementPercentageAll = this.liveData.percent_engaged;
          this.engagementPercentageFemale = this.liveData.percent_engaged_female;
          this.engagementPercentageMale = this.liveData.percent_engaged_male;
          this.happinessValAll = this.liveData.total_happy;
          this.happinessPercentageAll = this.liveData.percent_happy;
          this.happinessPercentageFemale = this.liveData.percent_happy_female;
          this.happinessPercentageMale = this.liveData.percent_happy_male;
          this.stressFemaleLegend = this.liveData.percent_stressed_female_legend;
          this.stressMaleLegend = this.liveData.percent_stressed_male_legend;
          this.engagedFemaleLegend = this.liveData.percent_engaged_female_legend;
          this.engagedMaleLegend = this.liveData.percent_engaged_male_legend;
          this.happinessFemaleLegend = this.liveData.percent_happy_female_legend;
          this.happinessMaleLegend = this.liveData.percent_happy_male_legend;

          this.addChartData(this.stressInnerDoughnut,
            this.stressLabel,
            [this.stressPercentageAll, 100 - this.stressPercentageAll],
            this.stressBgColor,
            this.stressBgColor);
          this.addChartData(this.stressOuterDoughnut,
            this.genderLabel,
            [(this.stressPercentageMale), (this.stressPercentageFemale), 100 - this.stressPercentageAll],
            this.genderBgColor,
            this.genderBgColor);
          this.addChartData(this.engagementInnerDoughnut,
            this.engagementLabel,
            [this.engagementPercentageAll, 100 - this.engagementPercentageAll],
            this.engagementBgColor,
            this.engagementBgColor);
          this.addChartData(this.engagementOuterDoughnut,
            this.genderLabel,
            [(this.engagementPercentageMale), (this.engagementPercentageFemale), 100 - this.engagementPercentageAll],
            this.genderBgColor,
            this.genderBgColor);
          this.addChartData(this.happinessInnerDoughnut,
            this.happinessLabel,
            [this.happinessPercentageAll, 100 - this.happinessPercentageAll],
            this.happinessBgColor,
            this.happinessBgColor);
          this.addChartData(this.happinessOuterDoughnut,
            this.genderLabel,
            [(this.happinessPercentageMale), (this.happinessPercentageFemale), 100 - this.happinessPercentageAll],
            this.genderBgColor,
            this.genderBgColor);
        }
      }
    });

  }

  ngOnInit() {
    this.setupDoughnut();
  }

  addChartData(chart, label, data, bgColor, hoverBgColor) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
      dataset.backgroundColor = bgColor;
      dataset.hoverBackgroundColor = hoverBgColor;
    });
    chart.update();
  }

  removeChartData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data = [];
      dataset.backgroundColor = [];
      dataset.hoverBackgroundColor = [];
    });
    chart.update();
  }

  animate() {
    // console.log('should animate');
    this.renderer.setElementStyle(this.animateNumber.nativeElement, 'transform', 'scale3d(1.2, 1.2, 1.2)');

    setTimeout(() => {
      this.renderer.setElementStyle(this.animateNumber.nativeElement, 'transform', 'scale3d(1, 1, 1)');
    }, 200);
  }

  setupDoughnut() {
    Chart.defaults.global.defaultFontColor = 'transparent';
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
      labels: this.stressLabel,
      datasets: [
        {
          data: [this.stressPercentageAll, 100 - this.stressPercentageAll],
          backgroundColor: this.stressBgColor,
          hoverBackgroundColor: this.stressBgColor
        }]
    };
    const stressGenderInitData = {
      labels: this.genderLabel,
      datasets: [
        {
          data: [this.stressPercentageFemale, this.stressPercentageMale, 100 - this.stressPercentageFemale - this.stressPercentageMale],
          backgroundColor: this.genderBgColor,
          hoverBackgroundColor: this.genderBgColor
        }]
    };

    const engagementInitData = {
      labels: this.engagementLabel,
      datasets: [
        {
          data: [this.engagementPercentageAll, 100 - this.engagementPercentageAll],
          backgroundColor: this.engagementBgColor,
          hoverBackgroundColor: this.engagementBgColor
        }]
    };
    const engagementGenderInitData = {
      labels: this.genderLabel,
      datasets: [
        {
          data: [this.engagementPercentageFemale, this.engagementPercentageMale, 100 - this.engagementPercentageFemale - this.engagementPercentageMale],
          backgroundColor: this.genderBgColor,
          hoverBackgroundColor: this.genderBgColor
        }]
    };
    const happinessInitData = {
      labels: this.happinessLabel,
      datasets: [
        {
          data: [this.happinessPercentageAll, 100 - this.happinessPercentageAll],
          backgroundColor: this.happinessBgColor,
          hoverBackgroundColor: this.happinessBgColor
        }]
    };
    const happinessGenderInitData = {
      labels: this.genderLabel,
      datasets: [
        {
          data: [this.happinessPercentageFemale, this.happinessPercentageMale, 100 - this.happinessPercentageFemale - this.happinessPercentageMale],
          backgroundColor: this.genderBgColor,
          hoverBackgroundColor: this.genderBgColor
        }]
    };
    const activeUsersInitData = {
      labels: ['Stressed', 'Not Stressed'],
      datasets: [
        {
          data: [this.activeUsersValAll, 100 - this.activeUsersValAll],
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
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        cutoutPercentage: 85,
        legend: {
          display: false,
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
